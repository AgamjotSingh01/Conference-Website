import Card from "@/components/Card";
import persons from "@/public/data/description.json";

export default function Hero(){
    return(
        <div className="container">
            <div className="body">
                <div className="title_paper">
                    Key note  Speakers
                </div>

                {
                    persons.map((person,index)=>{
                        return(
                            <div key = {index}>
                                <Card
                                person={person}
                                />                                 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}