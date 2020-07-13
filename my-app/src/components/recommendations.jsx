import React from 'react';
import Cards from './cards';
import { db } from './firebase';

async function getFirebaseData(city) {
    const document = await db.collection('flight_price_' + city).doc("Prices").get();
    const all_time_average = await document.get("All Time Average"); 
    // console.log(all_time_average); 
    const monthly_average = await document.get("Monthly Average");
    return parseFloat((((all_time_average - monthly_average) / all_time_average) * 100).toFixed(2));
}

class Recommendations extends React.Component {
    constructor() {
        super();
        this.state={
            DPS: '',
            HKG: '',
            KUL: '',
            TYO: '',
            LON: ''
        }
    }

    async componentDidMount() {
        const DPS_ = await getFirebaseData("DPS");
        const HKG_ = await getFirebaseData("HKG");
        const KUL_ = await getFirebaseData("KUL");
        const LON_ = await getFirebaseData("LON");
        const TYO_ = await getFirebaseData("TYO");
        this.setState({
            DPS: DPS_,
            HKG: HKG_,
            KUL: KUL_,
            TYO: TYO_,
            LON: LON_
        })
    }

    findGreatest(obj) {
        var min = "";
        var min_value = -9999;
        if (obj.DPS > min_value) {
            min_value = obj.DPS;
            min = "DPS";
        } else if(obj.HKG > min_value) {
            min_value = obj.HKG;
            min = "HKG";
        } else if (obj.KUL > min_value) {
            min_value = obj.KUL;
            min = "KUL";
        } else if (obj.TYO > min_value) {
            min_value = obj.TYO;
            min = "TYO";
        } else if (obj.LON > min_value) {
            min_value = obj.LON;
            min = "LON";
        } else {
        }
        return min;
    }

    findSecond(obj, first) {
        var min = "";
        var min_value = -9999;
        if (obj.DPS > min_value && first !== "DPS") {
            min_value = obj.DPS;
            min = "DPS";
        } else if(obj.HKG > min_value && first !== "HKG") {
            min_value = obj.HKG;
            min = "HKG";
        } else if (obj.KUL > min_value && first !== "KUL") {
            min_value = obj.KUL;
            min = "KUL";
        } else if (obj.TYO > min_value && first !== "TYO") {
            min_value = obj.TYO;
            min = "TYO";
        } else if (obj.LON > min_value && first !=="LON") {
            min_value = obj.LON;
            min = "LON";
        } else {
        }
        return min;
    }

    findThird(obj, first, second) {
        var min = "";
        var min_value = -9999;
        if (obj.DPS > min_value && first !== "DPS" && second !== "DPS") {
            min_value = obj.DPS;
            min = "DPS";
        } else if(obj.HKG > min_value && first !== "HKG" && second !== "HKG") {
            min_value = obj.HKG;
            min = "HKG";
        } else if (obj.KUL > min_value && first !== "KUL" && second !== "KUL") {
            min_value = obj.KUL;
            min = "KUL";
        } else if (obj.TYO > min_value && first !== "TYO" && second !== "TYO") {
            min_value = obj.TYO;
            min = "TYO";
        } else if (obj.LON > min_value && first !=="LON" && second !=="LON") {
            min_value = obj.LON;
            min = "LON";
        } else {
        }
        return min;
    }

    render() {
        var first = this.findGreatest(this.state);
        var second = this.findSecond(this.state, first);
        var third = this.findThird(this.state, first, second);

        console.log(first);
        console.log(second);
        console.log(third);
        console.log(this.state);
        
        return(
            <Cards 
            DPS={this.state.DPS}
            HKG={this.state.HKG}
            KUL={this.state.KUL}
            LON={this.state.LON}
            TYO={this.state.TYO}
            first={this.first}
            second={this.second}
            third={this.third}/>
        )
    };
}

export default Recommendations;