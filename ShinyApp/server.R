# This is the server logic for a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)
library(ggplot2)

shinyServer(function(input, output) {
  
  # Sort the edge list based on the given arrangement variable
  plot_data <- reactive({
    subset <- d[d$db == input$db & d$outcomeName == input$outcomeName & d$targetName %in% input$treatments & d$comparatorName %in% input$treatments, ] 
    return(subset)
  })
  
  output$distPlot <- renderPlot({
    
    p <- ggplot(plot_data(), aes(x = targetName, y = comparatorName, fill = logRr))
    
    p <- p + geom_raster() +
      theme_bw() +
      # Because we need the x and y axis to display every node,
      # not just the nodes that have connections to each other,
      # make sure that ggplot does not drop unused factor levels
      scale_x_discrete(drop = TRUE) +
      scale_y_discrete(drop = TRUE) +
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
  
  
})
