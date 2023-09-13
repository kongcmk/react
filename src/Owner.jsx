import Layout from "./Layout.jsx"


const Owner = () => {

return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-screen h-64 text-center" >
                <h1 
                    className="py-2 text-3xl font-bold">
                    Chaimongkol Sawat
                </h1>
                <p>chaimongkol (Kong/ก้อง)</p>
            </div>
            <div className="flex flex-col items-center justify-center w-screen text-center">
                <div className="w-64 h-64 overflow-hidden rounded-full">
                    <img
                        className="object-cover w-full h-full mx-auto"
                        src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/368024607_110090948854307_7395349109243333441_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGc01kCvUU3N3--hsmTp5ZJ7DGfkia5XSDsMZ-SJrldIMCtXtXe5xex52SxhaSP_C1OiqQLWXL6xnS_3z63xRTJ&_nc_ohc=u-QWUmIA5OMAX-0GboG&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfAwe7r_RM3rA6tJGoX09p2uEaShLZEQXduw2KVgxa_4GA&oe=6505FA96"
                        alt="profile-picture"
                    />
                </div>
                <p className="w-5/6 my-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed sit temporibus odit eum ipsam eveniet, perferendis commodi placeat laborum animi quibusdam praesentium voluptas optio facere dicta libero sint earum maxime officiis aliquam eos quae alias. Facilis quasi voluptatibus quaerat unde consequatur, voluptatem distinctio labore, iste, quod nulla odio provident?</p>
            </div>
        </Layout>
    )
};


export default Owner;