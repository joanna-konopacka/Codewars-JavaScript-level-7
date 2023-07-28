function getRectangleArea(side, diagonal) {
    const area = (side * Math.sqrt(diagonal ** 2 - side ** 2)).toFixed(2);
    
    if (isNaN(area) || area <= 0) {
      return 'not a rectangle';
    }
    
    return parseFloat(area);
  }
  
  
  