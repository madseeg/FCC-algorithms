function truncateString(str, num) {
  // Clear out that junk in your trunk  
  
  if (str.length > num){
    if (num<=3){
      return str.slice(0,num) + "...";
    }
    return str.slice(0,num-3) + "...";
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
