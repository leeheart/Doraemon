const string = `.doraemon{
  background: #93B8CA;
  min-height: 70vh;
  position: relative;
}
.doraemon .head{
  border: 2px solid black;
  background: #1E90FF;
  width: 420px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50px;
  margin-left: -210px;
  border-radius: 200px / 190px;
}
.doraemon .head .face{
  border: 2px solid #000;
  background: #fff;
  width: 360px;
  height: 300px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  margin-left: -180px;
  border-radius: 170px / 140px;
}
.doraemon .head .face .eye{
  border: 2px solid #000;
  background: #fff;
  width: 90px;
  height: 110px;
  position: absolute;
  top: -45px;
  left: 50%;
  margin-left: -45px;
  border-radius: 40px / 50px;
}
.doraemon .head .face .eye::before{
  content: '';
  display: block;
  background: #000;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 55%;
}
.doraemon .head .face .eye.left::before{
  right: 10px;
}
.doraemon .head .face .eye.right::before{
  left: 10px;
}
.doraemon .head .face .eye.left{
  transform: translateX(-45px);
}
.doraemon .head .face .eye.right{
  transform: translateX(45px);
}
.doraemon .head .face .nose{
  border: 2px solid #000;
  background: #FF0000;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: 48px;
  margin-left: -25px;
  border-radius: 50%;
}
.doraemon .head .face .nose::before{
  content: '';
  display: block;
  background: #fff;
  box-shadow: 0 0 2px 2px rgba(255,255,255,0.4);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 5px;
}
.doraemon .head .face .noseBottom{
  border-left: 2px solid #000;
  width: 2px;
  height: 130px;
  position: absolute;
  left: 50%;
  top: 96px;
}
.doraemon .head .face .mouth{
  border: 2px solid #000;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 260px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 27px;
  margin-left: -130px;
  border-radius: 125px / 100px;
}
.doraemon .head .face .beard{
  width: 180px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 40px;
  margin-left: -90px;
}
.doraemon .head .face .beard.left{
  transform: translateX(-130px);
}
.doraemon .head .face .beard.right{
  transform: translateX(130px) rotate(180deg);
}
.doraemon .head .face .beard .beardLine{
  border-top: 2px solid black;
  width: 100px;
  height: 3px;
  position: absolute;
  top: 50%;
  right: 0;
}
.doraemon .head .face .beard .beardLine:nth-child(1){
  transform: rotate(20deg);
  top: 30%;
}
.doraemon .head .face .beard .beardLine:nth-child(3){
  transform: rotate(-20deg);
  top: 70%;
}
.doraemon .collar{
  border: 2px solid #000;
  background: #FF0000;
  width: 320px;
  height: 50px;
  position: absolute;
  top: 400px;
  left: 50%;
  margin-left: -160px;
  border-radius: 25px;
}
.doraemon .bell{
  border: 2px solid #000;
  background: #FFFF00;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 420px;
  margin-left: -30px;
  border-radius: 50%;
  overflow: hidden;
}
.doraemon .bell .bell-1{
  border: 2px solid #000;
  height: 8px;
  width: 60px;
  margin-top: 14px;
  margin-left: -2px;
}
.doraemon .bell .bell-2{
  background: #000;
  width: 16px;
  height: 10px;
  border-radius: 8px/5px;
  position: absolute;
  top: 28px;
  left: 50%;
  margin-left: -8px;
}
.doraemon .bell .bell-3{
  border-left: 2px solid #000;
  width: 2px;
  height: 18px;
  position: absolute;
  left: 50%;
  top: 38px;
  margin-left: -1px;
}`

export default string