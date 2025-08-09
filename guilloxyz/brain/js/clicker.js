//Money variables
let money = 0;
const _money = document.getElementById("moners");

//Mpc variables
let mpc = 1; //Base mpc
let mpcCost = 15; //Base mpc cost
const mpcText = document.getElementById("mpcCost");
const mpc_howMuch = document.getElementById("mpc_howmuch");

//Mps variables
let mps = 0;
let mpsCost = 25;
const mpsText = document.getElementById("mpsCost");
const mps_howMuch = document.getElementById("mps_howmuch");

//Broker variables
let brokers = 0;
let brokerCost = 250;
const brokerText = document.getElementById("brokerCost");
const broker_howMuch = document.getElementById("broker_howmuch");

//-----------------------------------

//Basic money functions
function clicked() {
    money = money + mpc;
    updateMoneyText();
};

function updateMoneyText() {
    _money.innerHTML = String(money);
};

//Money per click functions
function _mpc() {
    if (money >= mpcCost) {
        mpc += 1;
        money = money - mpcCost;

        mpcCost = mpcCost + (Math.round(mpcCost * 0.2))

        updateMoneyText();
        updateMpcText();

        
    };
};

function updateMpcText() {
    mpcText.innerHTML = String(mpcCost);
    mpc_howMuch.innerHTML = String(mpc);
};

//-----------------------------------

//Money per second functions

function _mps() {
    if (money >= mpsCost) {
        mps += 1;
        money = money - mpsCost;

        mpsCost = mpsCost + (Math.round(mpsCost * 0.2));

        _money.innerHTML = String(money);
        mpsText.innerHTML = String(mpsCost);
        mps_howMuch.innerHTML = String(mps);
        
        console.log(mps);
        console.log(mpsCost);
    };
};

//Broker fucntions

function _broker() {
    if (money >= brokerCost) {
        brokers += 1;
        money = money - brokerCost;

        brokerCost = brokerCost + (Math.round(brokerCost * 0.2));

        _money.innerHTML = String(money);
        brokerText.innerHTML = String(brokerCost);
        broker_howMuch.innerHTML = String(brokers);
        
        console.log(brokers);
        console.log(brokerCost);
    };
};