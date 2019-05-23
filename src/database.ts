import mongoose from 'mongoose';

async function connect () {

try {
     await mongoose.connect('mongodb://localhost/ts-mibase,', {
         useNewUrlParser: true
     });
     console.log('>>>Database');
}

catch {
    console.log ('error');

}


}
export default connect;