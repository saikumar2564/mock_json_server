const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json")
const cors = require("cors");
const middlewares = jsonServer.defaults();

// router.db.readOnly = false;
server.use(cors());
server.use(middlewares);

server.use(jsonServer.bodyParser)

// server.post("/login", (req, res) => {
//     const payload = req.body

//     try {
//         const post = router.db.get('users').find({ Email: payload.Email }).value();

//         if (!post) return res.status(404).json({
//             message: "User not found, Please Register"
//         });

//         if (post.Password !== payload.Password) return res.status(400).json({
//             message: "Email/Password Incorrect"
//         });

//         res.status(200).json({
//             message: "Login Success",
//             Username: post.Username,
//             role:post.role
//         });

//     } catch (error) {
//         res.status(500).json({
//             error: "Something went wrong"
//         })
//         console.log(error)
//     }
// })

server.use(router);

server.listen(4000, () => {
    console.log('JSON Server is running at port: 4000')
})