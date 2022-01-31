const families = [{
    fatherName: "Wacu",
    motherName:"Usanase",
    childrenNumber:4
},
{
    fatherName: "Rwamugema",
    motherName:"Umuhoza",
    childrenNumber:6
},
{
    fatherName: "Mbarushimana",
    motherName:"Nziza",
    childrenNumber:2
},
{
    fatherName: "Muhirwa",
    motherName:"Bivegete",
    childrenNumber:-1
}]

const computeChildrenAverage = families =>{
    //a utility function to compute the average
    const average = (familyNumber, childrenNumber) =>{
         return Math.round(childrenNumber/familyNumber);
    }

    console.log("The magic children averager computer is starting...")
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let familyNumber =0, childrensNum = 0;
            //Loop through every family
            families.forEach(family => {
                if (family.fatherName === 'Yves') {
                    reject("Yves is not an allowed dad in 2022.")
                }
                if (family.childrenNumber < 0) {
                   return;
                }
                else{
                    family.childrenNumber ++;
                    familyNumber++;
                    childrensNum += family.childrenNumber;
                }
            });
            resolve(`The average Children Numberis ${average(familyNumber,childrensNum)}`)
        }, 1000);
    })

}

computeChildrenAverage(families)
.then(data => console.log(data))
.catch(err => console.log(err))