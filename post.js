function randomposts(json){
var totalrandom = parseInt(json.feed.openSearch$totalResults.$t);
for(i=0;i < totalpost;){mbill=0;Arraymbill.length=totalpost;l=Math.floor(Math.random()*totalrandom);for(j in Arraymbill){if(l==Arraymbill[j]){ mbill=1;}}
if(mbill==0&&l!=0){Arraymbill[i++]=l;}}
 document.write('<ul class="mblrandom"><span>Rekomendasi</span>');
for(n in Arraymbill){ var p=Arraymbill[n];var entry=json.feed.entry[p-1];
for(k=0; k < entry.link.length; k++){if(entry.link[k].rel=='alternate'){var mblarea = "<li>" + "<a href=" + entry.link[k].href + ">" + entry.title.$t + "</a></li>";
document.write(mblarea);}}
}document.write('</ul>');}
