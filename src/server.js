// import { createServer, Model, Response } from "miragejs"


// createServer({
//     models: {
//         projects: Model,
//         users: Model
//     },

//     seeds(server) {
//         server.create("project", { 
//             id: "1",
//             title: "My Friendly Desktop",
//             date:"December 2022" ,
//             tech: ["Pyton","Tkinkter", "OpenCV", "DeepFace"], 
//             description: "", 
//             imageUrl: "", 
//             type: "python", 
//             link: "" })
//         server.create("project", { 
//             id: "2",
//             title: "Ocean Odyssey",
//             date:"June 2023" ,
//             tech: ["C++","Graphics.h"], 
//             description: "", 
//             imageUrl: "", 
//             type: "c++", 
//             link: "" })
//         server.create("project", { 
//             id: "3",
//             title: "Spotify Clone",
//             date:"September 2023" ,
//             tech: ["HTML","CSS", "JavaScript"], 
//             description: "", 
//             imageUrl: "", 
//             type: "JavaScript", 
//             link: "" })
//         server.create("project", { 
//             id: "4",
//             title: "Sleepy Bunny Cafe Website Frontend",
//             date:"November 2023" ,
//             tech: ["ReactJS","CSS"], 
//             description: "", 
//             imageUrl: "", 
//             type: "React", 
//             link: "" })
//         server.create("project", { 
//             id: "5",
//             title: "Shopster- Ecommerce Website",
//             date:"November 2023" ,
//             tech: ["WordPress","WooCommerce"], 
//             description: "", 
//             imageUrl: "", 
//             type: "WordPress", 
//             link: "" })
//         server.create("project", { 
//             id: "6",
//             title: "Wok - Restaurant Website",
//             date:"Jan 2024" ,
//             tech: ["WordPress","WpCafe"], 
//             description: "", 
//             imageUrl: "", 
//             type: "WordPress", 
//             link: "" })
//         server.create("project", { 
//             id: "7",
//             title: "Tenzies Game",
//             date:"Feb 2024" ,
//             tech: ["ReactJS","CSS"], 
//             description: "", 
//             imageUrl: "", 
//             type: "React", 
//             link: "" })
//         server.create("project", { 
//             id: "8",
//             title: "Quizzical",
//             date:"Feb 2024" ,
//             tech: ["ReactJS","Api" , "CSS"], 
//             description: "", 
//             imageUrl: "", 
//             type: "React", 
//             link: "" })
//         server.create("project", { 
//             id: "9",
//             title: "Meme Generator",
//             date:"Feb 2024" ,
//             tech: ["ReactJS","Api" , "CSS"], 
//             description: "", 
//             imageUrl: "", 
//             type: "React", 
//             link: "" })
//         server.create("project", { 
//             id: "10",
//             title: "Vanlife",
//             date:"March 2024" ,
//             tech: ["ReactJS","React Router 6","Api" , "CSS"], 
//             description: "", 
//             imageUrl: "", 
//             type: "React", 
//             link: "" })
       
        
//     },

//     routes() {
//         this.namespace = "api"
//         this.logging = false
//         // this.timing = 2000  // => mock a 2 second delay in server response
//         // this.passthrough("https://firestore.googleapis.com/**")
        
//         this.get("/projects", (schema, request) => {
//             // return new Response(400, {}, {error: "Error fetching data"})
//             return schema.projects.all()
//         })

//         this.get("/projects/:id", (schema, request) => {
//             const id = request.params.id
//             return schema.projects.find(id)
//         })

//         this.get("/host/vans", (schema, request) => {
//             // Hard-code the hostId for now
//             return schema.vans.where({ hostId: "123" })
//         })

//         this.get("/host/vans/:id", (schema, request) => {
//             // Hard-code the hostId for now
//             const id = request.params.id
//             return schema.vans.findBy({ id, hostId: "123" })
//         })
        
       
//     }
// })