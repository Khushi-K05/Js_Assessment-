/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const ArrayNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name,Age,Education,PhoneNo,Gender) {
   let ObjNFTs = {
        "name" : Name,
        "age" :Age,
        "education" :Education,
        "ContactNo": PhoneNo,
        "gender" :Gender
    };
    ArrayNFTs.push(ObjNFTs);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<ArrayNFTs.length;i++){
        console.log(ArrayNFTs[i]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("total number of NFTs we have minted  "+ ArrayNFTs.length);
}

// call your functions below this line
mintNFT("Khushi",18,"BE",9892849324,"Female");
mintNFT("Sagar",23,"BA",8922344324,"Male");
mintNFT("Bhavit",16,"12th",7027689906,"Male");
mintNFT("Urmi",41,"BA",6892849324,"Female");
mintNFT("Karam",43,"BA",8928492324,"Male");

listNFTs ();

getTotalSupply()

