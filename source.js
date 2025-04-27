//שם סטודנט : פיטר כרכבי 
//תעודת זהות :323115824
//עבודה כיחיד אין לי שותף

//True Or False Tasks

    //Task 1
    /*       Alert תשובה : כן תהיה 
    if("0")
    {
      alert('Hello');
    }
      */

    //Task 2
    /*
    let answer = prompt("?JavaScript מהו השם הרשמי של");

    if (answer === "ECMAScript") {
      alert("Correct!");
    } else {
      alert("ECMAScript! ? לא יודע ");
    }
    */


    //Task 3
    /*
    let score = prompt('please enter a number');
    let grade;

    if (score >= 90) {
      grade = "A";
    } if (score >= 80 && score < 90) {
      grade = "B";
    } if (score >= 70 && score < 80) {
      grade = "C";
    } if (score >= 60 && score < 70) {
      grade = "D";
    } if(score <60) {
      grade = "F";
    }

    console.log("הציון הוא:", grade);
    */


    //Task 4
    /*
    const result = prompt('please enter a number');
    if(isNaN(result))
    {
    alert('is not a number')

    }
    else if(Number(result) > 0)
    {
    alert(1)
    }
      else if(Number(result) < 0)
      {
        alert(-1)
        }
        else{
        alert(0)
        }
        */

    //Task 5
    /*
    let result = (a + b < 4) ? 'Not enough' : 'A lot';
    */

    //Task 6
    /*
    let message = (login == 'Employee' || login == 'Director') ? 'Hello' :
                  (login == '') ? 'No login' :
                  '';

    */

    //Task 7
    /*
    console.log(false || 'sdf');  // ? 'sdf' :תוצאה

    console.log(false && '');  // ? false :תוצאה

    console.log(true || '');  // ? true :תוצאה

    console.log(true && '');  // ? '' :תוצאה

    console.log(undefined || null);  // ?  null :תוצאה

    console.log(undefined || 0 || null);  // ? null :תוצאה

    console.log(undefined && 0 && null);  // ? undefined :תוצאה

    console.log(1 || 0);  // ? 1 :תוצאה

    console.log(null || 1);  // ? 1 :תוצאה

    console.log(null || 0 || 1);  // ? 1 :תוצאה

    */

//Loops Tasks

    //Task 1
    /*
    let i = 0, sum = 0;
    while (i <= 100) {
        sum += i;
        i++; 
    }
    console.log(sum); 

    */

    //Task 2
    /*
    let num;

    do {
      num = Number(prompt('Enter a positive number!'));
    } while (isNaN(num) || num <= 0);

    console.log(num);

    */

    //Task 3
    /*
    for (let i = 1; i <= 10; i++) {
      console.log(`7 x ${i} = ${7 * i}`);
    }
    */

    //Task 4
    /*

    const secret = 8;

    for (let i = 0; i < 10; i++) { 
        let guess = Number(prompt('נחש מספר בין 1 ל-10:'));
        
        if (guess === secret) {
            console.log('! נכון');
            break; // יציאה מהלולאה אם ניחש נכון
        } else {
            console.log('לא נכון, נסה שוב.');
        }
    }

    */

    //Task 5
    /*

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) // בודק אם i מתחלק ב־3 בלי שארית
        {
            continue; // מדלגים על ההדפסה ועוברים לסיבוב הבא
        }
        console.log(i); // מדפיסים את המספר
    }

    */


    //Task 6 
    /*
    //   ערך אחרון שהקוד מוציא זה 1
    //אינו 0 i כי הלולאה ממשיכה לעבוד כל עוד הערך של 
    //כל עוד הערך אינו 0  מציגים אותו ומפחיתים ממנו 1
    //לכן שמגיע ל 1 מציגים 1 ומפסיקים לולאה לכן ערך אחרון מוצג זה 1

    let i = 3;

    while (i) {
      alert( i-- );
    }

    */

    //Task 7
    /*
    //לא, שתי הלולאות לא מציגות את אותם ערכים 

    // ב-++i – נבדק הערך אחרי שהוגדל, אז ברגע ש־i נהיה 5, הוא כבר לא נכנס ללולאה.


    //1 while
    //(עולה ל 5 אחרי הבדיקה  i++ כי 4 < 5 ואז ) נבדק הערך לפני ההגדלה, ולכן גם כשהוא מגיע ל-5, הוא עדיין נכנס פנימה ומודפס 
    let i = 0;
    while (i++ < 5) console.log(i);

    //2 while
    //נהיה 5 הוא כבר לא נכנס ללולאה i - נבדק הערך אחרי שהוגדל, אז ברגע ש  
    let i = 0;
    while (++i < 5) console.log(i);

    */

    //Task 8
    /*
    //כן שתי הלולאות מוצאות התראה עם אותם ערכים
    // for בתוך התנאי של לולאת  ++i - ל i++ אין הבדל בתוצאה בין 
    //1 for
    for(let i = 0; i < 5; i++) console.log(i);

    //2 for
    for(let i = 0; i < 5; ++i) console.log(i);

    */


    //Task 9
    /* לולאה מדפיסה מספרים זוגיים מ 2 - 10

    for (let i = 2; i <= 10; i += 2) {
      console.log(i);
    }

    */

    //Task 10 
    /*
    //for loop
    for (let i = 0; i < 3; i++) {
      alert( `number ${i}!` );
    }

    //While loop
    let i = 0;
    while (i < 3) {
      alert(`number ${i}!`);
      i++;
    }


    */



