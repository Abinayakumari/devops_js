const greet=require('./app');

if((greet) ==="hello devOps|"){
    console.log("✅Test passed");
    process.exit(0);
}else{
    console.log("❌Test failed");
    process.exit(1);
}