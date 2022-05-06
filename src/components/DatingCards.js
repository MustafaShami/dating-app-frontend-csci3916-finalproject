import React, { useState } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'

const DatingCards = () => {
    const [people, setPeople] = useState([
        { name: "Ali 'Investor' Irdio", imgUrl: "https://media-exp1.licdn.com/dms/image/C5603AQE-EB0yXRlgYg/profile-displayphoto-shrink_200_200/0/1537831513758?e=1657152000&v=beta&t=zhn2mDOZxf_vgMO-JXz2siB6GbGLLAuDdpuBvDtMffk"},
        { name: "Bder 'Scooter-Boi' Jones", imgUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQEnSVAYMOsRLw/profile-displayphoto-shrink_200_200/0/1640863446944?e=1657152000&v=beta&t=CUzsr5TbCuzodh1vOid4I9bxWzjVXKfmFS6VlVD7PEc"},
        { name: "Kendal Jenner", imgUrl: "https://i.pinimg.com/originals/83/b7/29/83b72942278b47c54394f187e3755cb5.jpg"},
        { name: "AURIS 'Ace' MALICK", imgUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQGMYfCQwSYiPw/profile-displayphoto-shrink_200_200/0/1593499991029?e=1657152000&v=beta&t=mmxs-PEDGc29FmQWtvJvU01RzLhui5PLxoY9NuAgs5M"},
        { name: "Nate Bowow", imgUrl: "https://pbs.twimg.com/profile_images/1367232656610451460/pOzO6HKT_400x400.jpg"},
        { name: "Blake Lively", imgUrl: "https://www.usmagazine.com/wp-content/uploads/2019/08/Blake-Lively-Through-the-Years-06.jpg?quality=86&strip=all"},
        { name: "Taylor Swift", imgUrl: "https://www.billboard.com/wp-content/uploads/2022/05/taylor-swift-met-gala-2014-billboard-1548.jpg"},
        { name: "Dani 'BeefCake' Binda", imgUrl: "https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/34158141_601559426867236_9081730797186056192_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=9267fe&_nc_ohc=YRQJvUJMczQAX_dDPjw&_nc_ht=scontent.fapa1-1.fna&oh=00_AT9NFLlA3B3SUrlrzPFNBkwOvF-Ig_om78rvKNy8MSgWSg&oe=6299E204"},
        { name: "Melina Gates", imgUrl: "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga275589_melinda_gates_0001.jpg"},
        { name: "Sandra Bullock", imgUrl: "https://purewows3.imgix.net/images/articles/2022_04/sandra_bullock_lost_city_london_premiere_cat.jpg?auto=format,compress&cs=strip"},
        { name: "Ryan Reynolds", imgUrl: "https://images.wsj.net/im-419935?width=1920&size=0.862533692722372"},
        { name: "Tina 'Taco Twizzler' Diane", imgUrl: "https://i.pinimg.com/originals/69/db/78/69db7813539132edc96138c51319f555.jpg"},
        { name: "Amber Heard", imgUrl: "https://www.gannett-cdn.com/presto/2022/05/04/USAT/724bbc14-f5fd-4bbb-b7d5-731ac24b03ff-AFP_329G8Y4.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp"},
        { name: "Johnny Depp", imgUrl: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220504-johnny-depp-court-ac-857p-98b451.jpg"}

    ])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }

    return(
        <div className="datingCards">
            <div className="datingCards__container">
                {people.map((person) => (
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards;