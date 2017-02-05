public class Person {
  private final Date birthDate;
  // Other fields, methods, and constructor omitted
  ITEM 5: AVOID CREATING UNNECESSARY OBJECTS 21
  // DON'T DO THIS!
  public boolean isBabyBoomer() {
    // Unnecessary allocation of expensive object
    Calendar gmtCal =
    Calendar.getInstance(TimeZone.getTimeZone("GMT"));
    gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
    Date boomStart = gmtCal.getTime();
    gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
    Date boomEnd = gmtCal.getTime();
    return birthDate.compareTo(boomStart) >= 0 &&
    birthDate.compareTo(boomEnd) < 0;
  }
}
