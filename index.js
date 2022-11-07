class user{

    static count=0
  
    constructor(username,email,password){
  
      this.username=username
  
      this.email=email
  
      this.password=password
  
      user.count++
  
    }
  
    register(){
  
      console.log(this.username+' is register')
  
    }
  
    registereduser(){
  
      console.log('no of user registered = '+user.count)
  
    }
  
  }


  class member extends user{
    constructor(username,email,password,memberPackage){
        super(username,email,password)
        this.package=memberPackage
        let todaysdate=new Date;
        const membershiptillyear=todaysdate.getFullYear()
        const membershiptillmonth=todaysdate.getMonth()
        const membershiptillday=todaysdate.getDate()
        this.membershipactivetilldate=new Date(
            membershiptillyear,
            membershiptillmonth,
            membershiptillday
        )
    }
      renewMembership(){
        const membershipactivetillyear=this.membershipactivetilldate.getFullYear()
        const membershiptillmonth=this.membershipactivetilldate.getMonth()
        const membershiptillday=this.membershipactivetilldate.getDate()
        if(this.package==='standard package'){
            this.membershipactivetilldate=new Date(
                membershipactivetillyear,
                membershiptillmonth+1,
                membershiptillday
            )
        }else if(this.package==='yearly package'){
            this.membershipactivetilldate=new Date(
                membershipactivetillyear+1,
                membershiptillmonth,
                membershiptillday)
        }
           
        }
        getpackage(){
            console.log(this.username+'subscribed to'+this.package)
        }
      }  
      const sudhanshu=new member('sudhanshu','sudhanshupal234@gmail.com','8684858436','standard package')
      sudhanshu.getpackage();
      sudhanshu.renewMembership()
  
