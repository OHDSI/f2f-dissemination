
# This is the user-interface definition of a Shiny web application.
# You can find out more about building applications with Shiny here:
#
# http://shiny.rstudio.com
#

library(shiny)

shinyUI(fluidPage(

  titlePanel("OHDSI Evidence Pro"),

  sidebarLayout(
    sidebarPanel(
      sliderInput("se",
                  "Standard error cutoff:",
                  min = 0,
                  max = ceiling(max(d$seLogRr, na.rm = TRUE)),
                  value = 0,
                  step = 0.01),
      selectInput("db", "Database:", dbs),
      selectInput("outcomeName", "Outcome:", outcomes),
      checkboxGroupInput("treatments", "Treatments:", treatments, selected = treatments)
    ),

    mainPanel(
      plotOutput("distPlot")
    )
  )
))
