import { google } from "googleapis";

export const SHEET_ID = "1Pr6rdLZJECgtrdcfTH0EJoC7h3E06UdCxA0ubcPjOPY";

const client = new google.auth.JWT(
    "prabuddha@waste-399421.iam.gserviceaccount.com",
    null,
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVXmLEjM8L+Tdw\nPCZjIbXK3xVpRitSlJMHDUDPUqCZwTsC5lpDKPCN83BuXRAux6gv46iURRrZN3uN\nTnCYI1YF5jpB75C+0MZNPpfNLzvdmjTW292doiCalDKWYnMpDJJW6Wk1qWIo9Xnw\nuem9c7xDTYMjlrjEx3cl81oOANuPtfzv3pGU/e5A6u++ewjiFO3vXkM2L4367kup\ns6tbRpXvwkU0I4nkHTuxNHceRFkN8Z85Ge37gOFmWvj5ZZy6d+O227GomfB/j2He\n8BKssAMjY7itZFJg2s7CLrf+y3EmXvnF00tI/2yA3jAZ6EZfDzOvga3wlCdEaOJ0\nlHe3f7LXAgMBAAECggEAFGbehdG6+Hefe+1cdE0kX14eY38QpGhNeLalNE2/yoPl\n+xyAk/xlqAUXgo4Gfpqbs9yOYYMMEqoR98yAyqNSVeUSO/zGt+Apnfg2tqlmDYXx\nuHu0gJ6ghHdYMPX/8fRgR8wwwa9NEgKK4uA7/+ABp+PQ/sWqLDKwa2IOAdnGJMMC\nzH2Hr2tgwqsCAxYXU0PqKXNYgi8SI1Q//mkl+TBdgvhxwq/deWDmLILuG9d6cwM8\nUA2ppMZWxJPl/RU+sJfbC1syf/cgJMyrgcnQ9Xm9AO7yUT6YZAQr/Punr/CKct3K\n10nnZVaS4mM6SHwLxLRo32wie9OiM0mEamF0p3L0BQKBgQDz+V1TMP9uJlgZAP4k\n0nSkVsfGM96afhQ79Aul7xB1QmVgJA1QBEH/OdKSxcaWiyLkxaKyYOKDJ75goYAv\ncWNvZnob6dZ42zqZ4E7AJ1jKmmXL9ZyDwXpou0IGe62PUs2w8fjGpFtmRjH21iAR\nsa5bHnAR9CAe0q5fYqFfMkcF5QKBgQDf4tI0m8usSJUjvh3pyUTXyZb1tJy3/ZoY\nGSAhmM7i1XDM/tzNQlC0VIgAiwBaLMkovXMzamnuwzDIlyqo/1w/EzH6RpJG40/3\n9O9cO1Q4FCgimBUyLLjyBWMDw5zqnQpcnfrizCVfor0w1y7/974MBt2bvhurLpl+\nw66gS+GKCwKBgQC4WfgT8ZVBNUYidqaTSleLCmvgL7eIA7bkao8WrmNAR5B0qilJ\nCj6YTaf48esSPEZ8mX5LzXu7YR+wwrgqoUJingus5fAC2J0aQu0es1ybkzlSed/v\nixYk50KHxZKrFwWIK/8wkmbiDC6a9se6twkpnwFN/6r5v3a1asDHPyV9pQKBgCaM\nU00jlgnv5V3mGhhqwyO0Xf2oP2Oekq2bheDDArwjq+xf5Xyh8mtaMqCFTmY4V9pf\n5DnyFJM7oGapQHsgnK1vjKdfB0iVUuuKjLwAqxuMvOxX6y5cbOue6dF4GMh8iZAw\n00XBiJ3S02hZZIpGCb7gX7+1F+Z9e4hMAQEwj4DJAoGBAMZqU5Aq7Rv+dayrkvz3\n24djXs31hQi9r7iiZQ7AMjUmw9MlpldyMojm1NKrCEJMgAuDfiZnhtxZtCgTNJEt\nygWxb2QCNPMNhBtzUgr/YTwB/oVejemU0QfNYmGE+xi0WZV5iLjRThXf+IHa67aX\ndOZaFu2ayRb+/rMT+qn8cAyq\n-----END PRIVATE KEY-----\n",
    ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({
    version: "v4",
    auth: client,
  });
  
  export default sheets;
  