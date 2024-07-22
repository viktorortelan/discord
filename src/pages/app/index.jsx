import "./index.scss" 

export default function App () {
    return (
        <div>
            <div className="Mae">
                <div className="card">
                <img className="cartao" src="https://cdn.discordapp.com/discovery-splashes/586704051148816385/8d9f4e10f9394ee7d8ba90bec94ef2a0.jpg?size=512" alt="" />
                <div className="info">
                    <div className="infoCab">
                        <img className="logan" src="https://cdn.discordapp.com/icons/586704051148816385/a_0373a32bd3c0a40c117a7dbfc541eaf1.jpg?size=256" alt="" />
                        <h1>Blox Fruits</h1>
                    </div>

                    <div className="infoTexto">
                        <h1>The official community for the popular Roblox game known as Blox Fruits.</h1>
                    </div>
                </div>
                </div>


                <div className="seccao1">
                    <h1>Have a server you want to add to Discovery?</h1>
                    <a href="">Make Your Community Public</a>
                </div>


                <div className="seccao2">
                    <div className="info2">
                        <h2>Find a place where you belong</h2>
                        <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

                        <a href="https://discord.com/register">Join Discord</a>
                    </div>

                    <img className="chat" src="https://media.discordapp.net/attachments/1249821808232894526/1264951698661707836/discord_foto-removebg-preview.png?ex=669fbd92&is=669e6c12&hm=bdbb4fd5299520bab8b20ab3d323e195210e92eec3a76e3e4319166b4dfc685a&=&format=webp&quality=lossless" alt="" />
                </div>
            </div>
        </div>
    )
}