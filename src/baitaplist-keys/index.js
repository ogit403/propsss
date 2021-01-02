import React, { Component } from 'react'

export default class BaiTapListKeys extends Component {

    constructor(props){
        super(props);

        this.state = {
            arr: [
                {
                "maPhim": 1283,
                "tenPhim": "Trainwreck",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
                "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy."
                },
                {
                "maPhim": 1284,
                "tenPhim": "Inside Out",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
                "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school."
                },
                {
                "maPhim": 1285,
                "tenPhim": "Home",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
                "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own."
                },
                {
                "maPhim": 1286,
                "tenPhim": "Batman v Superman: Dawn of Justice",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
                "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before."
                },
                {
                "maPhim": 1287,
                "tenPhim": "Ant-Man",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
                "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world."
                },
                {
                "maPhim": 1288,
                "tenPhim": "Jurassic World",
                "hinhAnh": "https://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
                "moTa": "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree."
                }
                ]
        }
    }

    CutPara = (para) => {
        return para.slice(0, 100) + "...";
    }
    
    renderTable = () => {
        const { arr } = this.state;

        return arr.map((item, index) => {
            return (
                <>
                    <div key={index} className="col-4 mt-4">
                            <div className="card" style={{width: '20rem'}} >
                                <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{height: 300}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.tenPhim}</h5>
                                    <p className="card-text">{this.CutPara(item.moTa)}</p>
                                </div>
                            </div>
                    </div>    
                </>
            );
        })
    }

    renderHTML = () => {
        return (
            <>
                <div className="container">
                    <h3 className="text-danger">Danh sách phim</h3>
                    <div className="row">
                        {this.renderTable()}
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
            <>
                {this.renderHTML()}
            </>
        )
    }
}
