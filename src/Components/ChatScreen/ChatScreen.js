import React, { useState } from 'react'
import './ChatScreen.css';
import Wait from './Wait.png'
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';


function ChatScreen() {
    
    const [personalSavings, setPersonalSavings] = useState("")
    const [retirementPlans, setretirementPlans] = useState("")
    const [getInvestor, setgetInvestor] = useState("")
    const [date, setDate] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [openModal, setOpenModal] = useState(false);

    //Buttons
    const [askpersonalSavings, setaskPersonalSavings] = useState(true)
    const [askretirementPlans, setaskRetirementPlans] = useState(false)
    const [askInvestor, setaskInvestor] = useState(false)

    
    const onboarding = [
        {
            text: "Hello I am Henry, I am your personal assisstant"
        },
        {
            text: "Nice work, deciding to conslidate your retirement accounts. Choosing your right accout would be hard, so i am here to help you"
        },
        {
            text: "Tell me do you have atleast 6 months of personal savings outside of your retirement accounts?"
        }
    ]

    const typeofInvestor = [
        {
            text: "There are 2 types of investor"
        },
        {
            text: "An active investor engages in an investing strategy that involves buying and selling securities and other types of investments. Active investors continuously monitor their investments and market conditions to identify new profit opportunities."
        },
        {
            text: "A passive investor is one who does not participate in the day-to-day decisions of running a company. In partnerships, such investors may be deemed limited partners rather than general partners."
        },
        {
            text: "Which one describes you the best?"
        },
    ]
    //Personal Savings
    const personalSavingsAnswer = (answer) => {
        setaskPersonalSavings(false)
        setPersonalSavings(answer)
        setaskRetirementPlans(true)
    }

    //Edit Personal Savings
    const editPersonalSavings = () => {
        alert("You are changing your personal Savings Option")
        setaskPersonalSavings(true)
        setPersonalSavings("")
        setretirementPlans("")
        setgetInvestor("")
        setaskRetirementPlans(false)
        setaskInvestor(false)
        setOpenModal(false)
        setBirthdate("")
    }

    //Retirement Options

    const retirementPlansAnswer = (answer) => {
        // setaskRetirementPlans(false)
        setretirementPlans(answer)
        setaskInvestor(true)
    }

    //Edit Personal Savings
    const editRetirementOptions = () => {
        alert("You are changing your Retirement Option")
        setaskRetirementPlans(true)
        setretirementPlans("")
        setgetInvestor("")
        setaskInvestor(false)
        setOpenModal(false)
        setBirthdate("")
    }
    //Active or Passive Investor
    const getInvestorType = (investor) => {
        setgetInvestor(investor)
    }
    // Edit getInvestor
    const editgetInvestor = () => {
        alert("You are changing your Type of Investor Option")
        setgetInvestor("")
        setBirthdate("")
        setaskInvestor(true)
        setOpenModal(false)
    }

    const setConfirmation = () => {
        if (!date) {
            alert("Please enter your birthdate")
        } else {
            setBirthdate(date)
            setOpenModal(true)
        }
    }

    // Edit Birthdate
    const editBirthdate = () => {
        setBirthdate("")
        setOpenModal(false)
    }

    return (
        <div className="ChatScreen">
            <div className="chatscreen__henry">
                <img src="https://www.vpr.org/sites/vpr/files/styles/x_large/public/201901/henry-epp-vpr-bishop-20180420.jpg" alt="" />
                <h2>Henry</h2>
                <p>Transfer Specialist</p>
            </div>
            <div className="chatScreen__messages">
                <img src={Wait} alt="" className="chatScreen__load"/>
                {onboarding && onboarding.map(message => (
                    <div className="chatScreen__message" style={{animation: `chatblock 1s 3s forwards`}}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            {askpersonalSavings &&
                <div className="chatScreen__buttons" style={{ 'animation': 'chatblock 1s 2s forwards', 'margin-left': '1rem' }}>
                    <Button variant="contained" color="primary" onClick={(e) => personalSavingsAnswer('1')}>Yes</Button>
                    <Button variant="contained" color="primary" onClick={(e) => personalSavingsAnswer('0')}>No</Button>
                </div>
            }
            {personalSavings.length > 0 &&
                <div className="chatScreen__messageRight">
                    <CreateIcon onClick={() => editPersonalSavings()} />
                    {personalSavings === '0'  ? <p>No, I don't</p> : <p>Yes, I do</p>}
                </div>
            }  
            {askretirementPlans &&
                <>
                    <img src={Wait} alt="" className="chatScreen__load"/>
                    <div className="chatScreen__message" style={{ 'animation': 'chatblock 1s 3s forwards' ,'margin-left': '1rem'}}>
                        <p>Some Retirement Plans allows you to take out loans. Is this feature important to you?</p>
                    </div>
                </>
            }
            {(retirementPlans.length === 0 && askretirementPlans) && <div className="chatScreen__buttons">
                <Button variant="contained" color="primary" onClick={(e) => retirementPlansAnswer('1')}>Yes</Button>
                <Button variant="contained" color="primary" onClick={(e) => retirementPlansAnswer('0')}>No</Button>
            </div>}
            {retirementPlans.length > 0 &&
                <div className="chatScreen__messageRight">
                    <CreateIcon onClick={() => editRetirementOptions()} />
                    {retirementPlans === '0' ? <p>No, I don't</p> : <p>Yes, I do</p>}
                </div>
            }
            {askInvestor &&
                <div className="chatScreen__messages">
                    <img src={Wait} alt="" className="chatScreen__load"/>
                    {typeofInvestor && typeofInvestor.map(message => (
                        <div className="chatScreen__message" style={{animation: `chatblock 1s 3s forwards`}}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            }
            {(getInvestor.length === 0 && askInvestor) && <div className="chatScreen__buttons">
                <Button variant="contained" value="active" color="primary" onClick={(e) => getInvestorType('Active')}>Active</Button>
                <Button variant="contained" value="passive" color="primary" onClick={(e) => getInvestorType('Passive')}>Passive</Button>
            </div>}
            {getInvestor &&
                <div className="chatScreen__messageRight">
                    <CreateIcon onClick={() => editgetInvestor()} />
                    <p>{getInvestor}</p>
                </div>
            }
            {getInvestor &&
                <>
                    <img src={Wait} alt="" className="chatScreen__load"/>
                    <div className="chatScreen__message" style={{ 'animation': 'chatblock 1s 3s forwards', 'margin-left': '1rem' }}>
                        <p>We are required by your provider to collect some identity infomration</p>
                    </div>
                    <div className="chatScreen__message" style={{ 'animation': 'chatblock 1s 3s forwards', 'margin-left': '1rem' }}>
                        <p>What is your date of birth?</p>
                    </div>
                </>
            }
            {(birthdate.length === 0 && getInvestor) &&
                <div className="chatScreen__date">
                    <input className="chatScreen__datePicker" value={date} type="date" onChange={(e)=> setDate(e.target.value)} />
                    <Button variant="contained" color="primary" onClick={() => setConfirmation()}>Confirm</Button>
                </div>
            }
            {openModal &&
                <div className="chatScreen__messageRight">
                    <CreateIcon onClick={() => editBirthdate()} />
                    <p>{birthdate}</p>
                </div>
            }
            {openModal && 
                <>
                    <img src={Wait} alt="" className="chatScreen__load"/>
                    <div className="chatScreen__message" style={{ 'animation': 'chatblock 1s 3s forwards', 'margin-left': '1rem' }}>
                        <p>Thank you for walking me through your prefrences, this will make it easier for us to choose the right desintation for you</p>
                    </div>
                </>
            }
            {openModal && 
                <div className style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Button variant="contained" size="large" color="primary">Continue</Button>
                </div>
            }
            
        </div>
    )
}

export default ChatScreen
 