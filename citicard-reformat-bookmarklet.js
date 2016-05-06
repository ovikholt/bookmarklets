// Log into citicard (sumitclub.jp) run this code in the console

// Dates will be converted to ISO format.
// Amounts will be rounded off to nearest thousand yen.

// Not tested for negative amounts (i.e. amounts added to the account)
// No tests present.
// Experimental code.

rows=document.querySelectorAll('table#content_table_1 tr');
g=function(el,i){
  cols=el.querySelectorAll('td')
  if (cols.length>=1) {
    date=cols[0].innerText;
    date=date.replace(/\//g, '-');
    cols[0].innerText=date;
  }
  if (cols.length>=2) {
    cols[1].hidden=true;
  }
  if (cols.length>=4) {
    cols[3].hidden=true;
  }
  if (cols.length>=5) {
    text=cols[4].innerText;
    m=text.match(/([0-9,]+) (JPY)/)
    if (m.length>1) {
      cost=m[1].replace(',', '');
      cost/=1000;
      rounded=Math.round(cost);
      jpy=m[2]
      cols[4].innerText=rounded + ' k' + jpy;
    }
  }
};
Array.prototype.slice.call(rows, true).forEach(g);

