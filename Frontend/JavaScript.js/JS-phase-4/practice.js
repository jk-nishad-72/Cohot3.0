


function Employee(eName , eProf, eSalary,eAge){

       this.eName = eName;
       this.eProf = eProf;
       this.eSalary = eSalary;
       this.eAge = eAge;

        this.eIntro = function(){
             console.log(`Employe name is ${this.eName} and I work as ${this.eProf} age is ${this.eAge} and Salary is ${eSalary} `)
        }
}


const Employee1 = new Employee('jay kishan ','Backend Engineer', 100000,22)
const Employee2 = new Employee('shivam ','frontend Engineer', 150000,25)
const Employee3 = new Employee('Deva ','Full stack Engineer', 100000,24)

// console.log(Employee1 , Employee1.eIntro()) 
// console.log(Employee2 , Employee2.eIntro()) 
// console.log(Employee3 , Employee3.eIntro()) 

class   Patient {

     constructor(pName , pDesease ,money,serious){
        this.pName = pName
        this.pDesease = pDesease
        this.money = money
        this.serious = serious

     }

     petientIntr(){
        console.log(`Patient Name ${this.pName} Desease ${this.pDesease} Required Money ${this.money} is Serious ${this.serious}`)

     }
}

class Docter extends Patient {

     constructor(pName , pDesease,money,serious ,isOperation){
        super(pName , pDesease , money, serious)
        this.isOperation = isOperation;
     }

}

const petient1 = new Patient('heera' , 'Maleria','500',false)


console.log(petient1 , petient1.petientIntr())

const Doct1 = new Docter('Jk ','fever',100, false , 'No')

console.log(Doct1 , Doct1.petientIntr())

