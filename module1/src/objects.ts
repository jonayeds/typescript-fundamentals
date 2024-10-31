{
    
    const user: {
    readonly company: "babul"; //Literal type -->( for fixed values) readonly--> ( Not permitted to re assign Property ) 
    name?: string ; // optional type --> ( for optional property ) 
    age?: number | boolean; // ( data-type | data-type ) any one of the data-type is allowed
    isAdmin?: boolean;
} = {
    company:"babul",
    name: "John",
    age: 24,
    isAdmin: true
}


}
