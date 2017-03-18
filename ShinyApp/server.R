# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(ggplot2)

shinyServer(function(input, output, session) {
  observe({
    query <- parseQueryString(session$clientData$url_search)
    if (!is.null(query[['outcome']])) {
      updateTextInput(session, "outcomeName", value = query[['outcome']])
    }
  })  
  
  plot_data <- reactive({
    subset <- d[!is.na(d$seLogRr) & d$seLogRr >= input$se & d$db == input$db & d$outcomeName == input$outcomeName & d$targetName %in% input$treatments & d$comparatorName %in% input$treatments, ] 
    return(subset)
  })
  
  output$distPlot <- renderPlot({
    
    p <- ggplot(plot_data(), aes(x = targetName, y = comparatorName, fill = logRr))
    
    p <- p + geom_raster() +
      # Because we need the x and y axis to display every node,
      # not just the nodes that have connections to each other,
      # make sure that ggplot does not drop unused factor levels
      scale_x_discrete(drop = TRUE) +
      scale_y_discrete(drop = TRUE) +
      scale_fill_distiller(type = "div", palette = "RdBu") +
      theme(
        # Rotate the x-axis lables so they are legible
        axis.text.x = element_text(angle = 270, hjust = 0, size = 12),
        axis.text.y = element_text(size = 12),
        # Force the plot into a square aspect ratio
        aspect.ratio = 1,
        # Hide the legend (optional)
        legend.position = "bottom")
    
    
    return(p)
  })
  
  plot_data_forest <- reactive({
    subset <- d[d$db == input$forestDb & d$targetName == input$forestTreatment & !is.na(d$seLogRr), ] 
    return(subset)
  })
  
  output$forestPlot <- renderPlot({
    breaks <- c(0.25, 0.5, 1, 2, 4, 6, 8, 10)
    theme <- element_text(colour = "#000000", size = 6)
    themeRA <- element_text(colour = "#000000", size = 5, hjust = 1)
    col <- c(rgb(0, 0, 0.8, alpha = 1), rgb(0.8, 0.4, 0, alpha = 1))
    colFill <- c(rgb(0, 0, 1, alpha = 0.5), rgb(1, 0.4, 0, alpha = 0.5))
    subset <- plot_data_forest()
    subset$significant <- subset$ci95lb > 1 | subset$ci95ub < 1
    p <- ggplot(subset, aes(x = rr, y = outcomeName, xmin = ci95lb, xmax = ci95ub, color = significant, fill = significant)) +
      geom_vline(xintercept = breaks, colour = "#AAAAAA",lty = 1, size = 0.2) + 
      geom_vline(xintercept = 1, size = 0.5) +
      geom_errorbarh() +
      geom_point() +
      scale_colour_manual(values = col) + 
      scale_fill_manual(values = colFill) +
      scale_x_continuous("Hazard ratio", trans = "log10", breaks = breaks, labels = breaks) +
      coord_cartesian(xlim = c(0.25, 10)) +
      facet_wrap(~comparatorName) +
      theme(panel.grid.minor = element_blank(), panel.background = element_rect(fill = "#FAFAFA", colour = NA), panel.grid.major = element_line(colour = "#EEEEEE"), axis.ticks = element_blank(), axis.title.y = element_blank(), axis.title.x = element_blank(), axis.text.y = themeRA, axis.text.x = theme, legend.key = element_blank(), strip.text.x = theme, strip.background = element_blank(), legend.position = "none")
    
    return(p)
  })
  
  output$hoverInfo <- renderUI({
    # Hover-over adapted from https://gitlab.com/snippets/16220
    hover <- input$plotHover
    point <- nearPoints(plot_data_forest(), hover, threshold = 50, maxpoints = 1, addDist = TRUE)
    print(nrow(point))
    if (nrow(point) == 0) return(NULL)
    
    # calculate point position INSIDE the image as percent of total dimensions
    # from left (horizontal) and from top (vertical)
    left_pct <- (hover$x - hover$domain$left) / (hover$domain$right - hover$domain$left)
    top_pct <- (hover$domain$top - hover$y) / (hover$domain$top - hover$domain$bottom)
    
    # calculate distance from left and bottom side of the picture in pixels
    left_px <- hover$range$left + left_pct * (hover$range$right - hover$range$left)
    top_px <- hover$range$top + top_pct * (hover$range$bottom - hover$range$top)
    
    # create style property fot tooltip
    # background color is set so tooltip is a bit transparent
    # z-index is set so we are sure are tooltip will be on top
    style <- paste0("position:absolute; z-index:100; background-color: rgba(245, 245, 245, 0.85); ",
                    "left:", left_px + 2, "px; top:", top_px + 2, "px;")
    
    # actual tooltip created as wellPanel
    hr <- paste0(formatC(point$rr, digits = 2, format = "f"), 
                 " (",
                 formatC(point$ci95lb, digits = 2, format = "f"), 
                 "-",
                 formatC(point$ci95ub, digits = 2, format = "f"), 
                 ")")
    wellPanel(
      style = style,
      p(HTML(paste0("<b> target: </b>", point$targetName, "<br/>",
                    "<b> comparator: </b>", point$comparatorName, "<br/>",
                    "<b> outcome: </b>", point$outcomeName, "<br/>",
                    "<b> database: </b>", point$db, "<br/>",
                    "<b> hazard ratio: </b>", hr)))
    )
  })
  
})
