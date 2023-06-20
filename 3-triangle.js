function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
      return a + b > c && a + c > b && b + c > a ? true :false
    }
    return false;
  }