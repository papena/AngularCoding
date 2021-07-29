export interface IUserModel
{
    EmailId:string;
    Password:string;
    RememberPassword:boolean;
    //  constructor(EmailId: string,Password:string) {
    //     //super();
    //     this.EmailId=EmailId;
    //     this.Password=Password;
    // }
}
 export class Usermodel  implements IUserModel
{
    EmailId:string;
    Password:string;
    RememberPassword:boolean;

    constructor(EmailId: string,Password:string,RememberPassword:boolean) {
        //super();
        this.EmailId=EmailId;
        this.Password=Password;
        this.RememberPassword=RememberPassword;
    }
}