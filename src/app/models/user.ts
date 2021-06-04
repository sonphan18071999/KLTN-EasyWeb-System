export class User{
    username!: String 
    email!: String
    password!: String
    firstName!: String
    lastName!: String
    constructor(fname:string,lname:string,userName:string, email:string, password:string){
        this.username=userName;
        this.email=email;
        this.password=password;
        this.firstName=fname;
        this.lastName=lname;
    }
}