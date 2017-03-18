var d3 = require('d3');
var _ = require('./supergroup');

var e = require('./evidence');
var i = require('./irs_depression');

e = e.filter(d=>d.db === 'CCAE');
e = e.filter(d=>d.targetName !== 'Psychotherapy');
e = e.filter(d=>d.comparatorName !== 'Psychotherapy');

e = e.filter(d=>d.targetName !== 'Electroconvulsive therapy');
e = e.filter(d=>d.comparatorName !== 'Electroconvulsive therapy');

e.map(er => {
  let regex = new RegExp('\\b' + er.targetName);
  let irs = 
    i.filter(ir => ir.COHORT_DEFINITION_NAME.match(regex) && ir.CONDITION_CONCEPT_NAME === er.outcomeName);
  if (irs.length > 1) 
    throw new Error(JSON.stringify({er,irs},null,2));
  e.target_ir = irs.IR_ITT_1000PP;
  return e;
});

//let tn = _.supergroup(e, ['db', 'targetName', 'comparatorName', 'outcomeName']);

//let ccaeRecs = e.filter(d=>d.db === 'CCAE');
let sg = _.supergroup(e, ['targetName',
                          'comparatorName',
                          'outcomeName']);


//let ccae = tn.lookup('CCAE');
//console.log(ccae);

//console.log(ccae.flattenTree().namePaths().join('\n'));

console.log(e+'');

['targetName', 'comparatorName', 'outcomeName']
  .forEach(fn =>
        console.log(
          fn, '\n',
          _.supergroup(e, fn).map(
            v => ({[v]:v.records.length})),
          '\n\n'));


sg.lookup(['Paroxetine','Nortriptyline']).records.slice(0)

let rr = d3.scaleLinear()
              .domain(d3.extent(e.filter(d=>d.rr>0).map(d=>d.rr)))
              .range([d3.color('lightgreen'), d3.color('red')]);

let ci95lb = d3.scaleLinear()
              .domain(d3.extent(e.filter(d=>d.ci95lb>0).map(d=>d.ci95lb)))
              .range([d3.color('lightgreen'), d3.color('red')]);

let ci95ub = d3.scaleLinear()
              .domain(d3.extent(e.filter(d=>d.ci95ub>0).map(d=>d.ci95ub)))
              .range([d3.color('lightgreen'), d3.color('red')]);

console.log(rr.domain());
console.log(rr.range());

console.log(ci95lb.domain());

console.log(ci95ub.domain());
/*
function getRows() {
  return [{
              title: 'Paroxetine',
              opacity: .7,
            },
            ...]
}
function getCols() {
  return [{
              title: 'Paroxetine',
              opacity: .7,
            },
            ...]
}
function getCell(rowTitle, colTitle) {
  return {
            reactComponent: CellContent,
          };
}
*/
