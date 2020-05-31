class Courses {
    title
    length
    #price 

    constructor(title, length, price)
    {
        this.title = title
        this.length = length
        this.price = price
    }

    valueFunction()
    {
        console.log("the value for this course is "+(this.length/this.price))
    }

    toPrint()
    {
        console.log(this.title+" is "+this.length+" hours long and costs $"+this.price)
    }

    set setPrice(price)
    {
        if(price>=0)
            this.price = price
        else
            alert(negative)
    }

    get getPrice()
    {
        return "$"+this.price
    }
}

class PracticalCourses extends Courses{
    numOfExercise

    constructor(title, length, price, numOfExercise)
    {
        super(title, length, price)
        this.numOfExercise = numOfExercise
    }
}

class TheoreticalCourses extends Courses{


    constructor(title, length, price)
    {
        super(title, length, price)
    
    }

    publish(){
        console.log(this.title+" is "+this.length+" hours long and costs $"+this.price)
    }
}

course1 = new Courses("Javascript", 2, 100)
course2 = new Courses("Java", 3, 50)
course1.valueFunction()
course2.valueFunction()
course1.toPrint()
course2.toPrint()
pracCourse1 = new PracticalCourses("physics", 5, 800)
pracCourse1.toPrint()
theryCourse = new TheoreticalCourses("theorietical physics", 3, 900)
theryCourse.publish()
course1.setPrice = 8000
console.log(course1.getPrice)