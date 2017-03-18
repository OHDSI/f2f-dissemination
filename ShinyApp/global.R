d <- readRDS(file.path("data", "fullset.rds"))
dbs <- as.character(unique(d$db))
dbs <- dbs[order(dbs)]
treatments <- as.character(unique(d$targetName))
treatments <- treatments[order(treatments)]
outcomes <- as.character(unique(d$outcomeName))
outcomes <- outcomes[order(outcomes)]