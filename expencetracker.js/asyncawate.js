console.log('person 1: Shows Tickets')
console.log('person 2: Shows Tickets')
const preMovie=async()=>{
    const promiseWifeBringingTickets= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'))
    const getButter=new Promise((resolve,reject)=>resolve('butter'))
    const getColdrink=new Promise((resolve,reject)=>resolve('coldrink'))
    

    let ticket=await promiseWifeBringingTickets
    /*console.log(`wife: i have the ${ticket}`)
    console.log('Husband: We should go in')
    console.log('Wife: no i am hungry')
    
    const popcorn=await getPopcorn
    console.log(`Husband: ok i got some ${popcorn}`)
    console.log('Husband: we should go in')
    console.log('Wife:no i need some butter on my popcorn')
    
    const butter=await getButter
    console.log(`Husband: i got some ${butter}`)
    console.log('Husband: anything else')
    console.log('Wife: yup some coldrink please!')

    const coldrink=await getColdrink
    console.log(`Husband: i got ${coldrink}`)
    console.log('Husband: anything else')
    console.log('Wife: no lets go inside we are super late')*/

   let [popcorn,butter,coldrink]=await Promise.all([getPopcorn,getButter,getColdrink])
    console.log(`${popcorn},${butter},${coldrink}`)

    return ticket;
 
}



preMovie().then((m)=>console.log(`person 3: Shows tickets ${m}`))

console.log('person 4: Shows Tickets')
console.log('person 5: Shows Tickets')