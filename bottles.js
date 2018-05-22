

var kombuchaCount = 100;
var lyric = "";
console.clear();
while (kombuchaCount > 0) {
  if(kombuchaCount ==2){
    lyric += kombuchaCount + " bottles of kombucha on the wall, " + kombuchaCount + " bottles of kumbucha.\n";
    console.log(kombuchaCount + " bottles of kombucha on the wall, " + kombuchaCount + " bottles of kumbucha,");
    console.log("Take one down, pass it around, ");
    kombuchaCount--;
    console.log(kombuchaCount + " bottle of kombucha on the wall.\n\n");
    lyric += "Take one down, pass it around, " + kombuchaCount + " bottle of kombucha on the wall.\n\n";
} else if (kombuchaCount ==1){
  lyric += kombuchaCount + " bottle of kombucha on the wall, " + kombuchaCount + " bottle of kumbucha.\n";
  console.log(kombuchaCount + " bottle of kombucha on the wall, " + kombuchaCount + " bottle of kumbucha,");
  console.log("take one down, pass it around.");
  kombuchaCount--;
  console.log("No more bottles of kombucha on the wall.\n\n");
  console.log("No more bottles of kombucha on the wall, no more bottles of kombucha.");
  console.log("Go to kitchen and make some more, 100 bottles of kombucha on the wall.\n\n");
  lyric += "Take one down, pass it around. No more bottles of kombucha on the wall.\n\n";
  lyric += "No more bottles of kombucha on the wall, no more bottles of kombucha.\n";
  lyric += "Go to kitchen and make some more, 100 bottles of kombucha on the wall.\n\n"
}
else{
  lyric += kombuchaCount + " bottles of kombucha on the wall, " + kombuchaCount + " bottles of kumbucha.\n";
  console.log(kombuchaCount + " bottles of kombucha on the wall, " + kombuchaCount + " bottles of kumbucha,");
  console.log("take one down, pass it around, ");
  kombuchaCount--;
  console.log(kombuchaCount + " bottles of kombucha on the wall.\n\n");
  lyric += "Take one down, pass it around, " + kombuchaCount + " bottles of kombucha on the wall.\n\n";
}
  // kombuchaCount--;
}
  console.log(lyric);
