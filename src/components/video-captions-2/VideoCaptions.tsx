import React, { useState, useEffect } from 'react';
import './VideoCaptions.css';
type Caption = {
    start: number;
    text: string;
};
const VideoCaptions = () => {
    const transcript: Caption[] = [
        { start: 0, text: '[upbeat music]' },
        { start: 7, text: "Hi, I'm Stephanie Wong, and I work for Google Cloud." },
        { start: 10, text: "While I could talk all day about cloud security," },
        { start: 13, text: "physical security at a Google data center" },
        { start: 15, text: "is still pretty new to me," },
        { start: 16, text: "so today I'm on a mission to learn all about it" },
        { start: 19, text: "by taking an inside look at the systems in place" },
        { start: 22, text: "that protect customer data" },
        { start: 23, text: "at a typical Google data center. Let's go." },
        { start: 25, text: '[upbeat music]' },
        { start: 28, text: "Six layers of security here" },
        { start: 31, text: "Security layer one refers to the property boundaries," },
        { start: 34, text: "and that includes signage and fencing." },
        { start: 37, text: "But things really start to get interesting" },
        { start: 38, text: "when it comes to layer two, also known as the secure perimeter," },
        { start: 42, text: "and that includes the main entrance gate which I am pulling up to right now." },
        { start: 46, text: '[upbeat music]' },
        { start: 49, text: "Hey, how's it going? person: Good morning." },
        { start: 51, text: '[upbeat music]' },
        { start: 58, text: "Layer 2 Security" },
        { start: 58, text: "Wong: So layer two has a lot of security features" },
        { start: 61, text: "ranging from smart fencing to overlapping cameras" },
        { start: 64, text: "to 24/7 guard patrols and more." },
        { start: 67, text: "I'm on my way to meet some experts" },
        { start: 69, text: "who are going to show me how it all works." },
        { start: 73, text: "Hi, Joe." },
        { start: 73, text: "Kava: Hi, Stephanie, how are you?" },
        { start: 75, text: "Wong: So I just passed the main gate and I saw guards and cameras," },
        { start: 78, text: "but what are some things that I didn't see?" },
        { start: 80, text: "Kava: Yeah there's actually a lot of technology" },
        { start: 82, text: "and operations going on behind the scene." },
        { start: 84, text: "So from the time that you're on site," },
        { start: 86, text: "we know that you're here," },
        { start: 87, text: "and we're able to do correlation analysis" },
        { start: 90, text: "of where you've been." },
        { start: 91, text: "We have guards in vehicles, we have some guards on foot." },
        { start: 94, text: "There's also the vehicle crash barrier." },
        { start: 97, text: "That's designed to stop a fully loaded truck" },
        { start: 99, text: "from crashing through the front entrance." },
        { start: 102, text: "Wong: Ricky, Tarik, can you tell me more about what's unique about the fencing?" },
        { start: 105, text: "Gordon: This particular fence is an anti-climb fence." },
        { start: 108, text: "It's also equipped with fiber. The technology tells us" },
        { start: 112, text: "if someone's near the fence or touches the fence." },
        { start: 115, text: "Billingsley: So we use thermal cameras and standard cameras." },
        { start: 117, text: "So we're able to see video footage at night" },
        { start: 120, text: "just as clearly as we can during the day." },
        { start: 123, text: '[light electronic music]' },
        { start: 127, text: "Layer 3 Security" },
        { start: 127, text: "Wong: Welcome to layer three, building access." },
        { start: 130, text: "But just so you know, I am still nowhere near the data center floor." },
        { start: 134, text: "That's a few more layers deep. Let's head inside." },
        { start: 137, text: "O'Brien: Stephanie." },
        { start: 138, text: "Wong: Hello." },
        { start: 140, text: "O'Brien: So you've gotten through the gate, you've come in," },
        { start: 141, text: "you've come in to our secure lobby." },
        { start: 144, text: "You have your card, and we know that that's you," },
        { start: 146, text: "but if someone happened to lose their card," },
        { start: 149, text: "what we want to make sure is that it's actually Stephanie" },
        { start: 152, text: "who has shown up." },
        { start: 154, text: "scanner: Please center your eye." },
        { start: 156, text: "O'Brien: And with iris scan, we can authenticate" },
        { start: 158, text: "that it's actually you along with your ID." },
        { start: 161, text: "Wong: Okay, I think it's good." },
        { start: 165, text: "One thing that's a little hard to get used to" },
        { start: 167, text: "when you visit a data center is," },
        { start: 169, text: "for secure areas, only one person" },
        { start: 171, text: "is allowed to badge through a door at a time." },
        { start: 175, text: '[light electronic music]' },
        { start: 182, text: "Layer 4 Security" },
        { start: 182, text: "Layer four includes the security operations center," },
        { start: 185, text: "or SOC, a hive of activity that is monitoring the data center" },
        { start: 189, text: "24/7, 365 days a year." },
        { start: 194, text: '[light electronic music]' },
        { start: 196, text: "So it sounds like we've been keeping them very busy today." },
        { start: 199, text: "Davis: Yes, yes you have." },
        { start: 201, text: "So the doors, the cameras, the badge readers," },
        { start: 204, text: "the iris scan-- everything is connected here." },
        { start: 206, text: "This is the brains of the security system." },
        { start: 209, text: "So if there's anything out of the ordinary happening," },
        { start: 212, text: "they have to be able to pick that up." },
        { start: 222, text: '[upbeat music]' },
        { start: 230, text: "Layer 5 Security" },
        { start: 230, text: "Wong: Interesting fact about layer five," },
        { start: 231, text: "the data center floor:" },
        { start: 233, text: "less than 1% of Googlers ever get to set foot in here." },
        { start: 237, text: "So right now, I'm feeling kinda special." },
        { start: 238, text: '[upbeat music]' },
        { start: 248, text: "Kava: This is truly a as-needed only access area," },
        { start: 252, text: "meaning that only the technicians" },
        { start: 254, text: "and engineers that have to be there" },
        { start: 256, text: "to maintain, upgrade, or repair the equipment" },
        { start: 259, text: "are ever allowed there." },
        { start: 262, text: "Wong: And do Googlers or anyone have access to the data?" },
        { start: 265, text: "Kava: We have access to the devices, but the data at rest" },
        { start: 268, text: "is encrypted, and our customers can issue" },
        { start: 271, text: "and keep their own encryption keys," },
        { start: 273, text: "and we do this because protecting the privacy" },
        { start: 276, text: "and the security of our users' data is our highest priority." },
        { start: 281, text: "Layer 6 Security" },
        { start: 281, text: "Wong: The mysterious layer six, where disks" },
        { start: 284, text: "are erased and destroyed and the fewest number of people" },
        { start: 287, text: "are allowed to enter." },
        { start: 289, text: "Drives that need to be retired from the data center floor" },
        { start: 291, text: "come into this room through a secure two-way locker system" },
        { start: 295, text: "which means that only technicians assigned to this room" },
        { start: 298, text: "can pull them from that locker to either erase" },
        { start: 300, text: "or destroy them." },
        { start: 302, text: "Henley: All right, welcome to the crusher room." },
        { start: 304, text: "Wong: Wow." },
        { start: 305, text: "Henley: So at this point, we have scanned the hard drive," },
        { start: 307, text: "and the software has told us that we need to destroy it." },
        { start: 310, text: "Wong: Can we see it in action?" },
        { start: 311, text: "Henley: Back up. Wong: All right." },
        { start: 312, text: "I'll stay back here. [both laugh]" },
        { start: 315, text: "[mechanical whirring]" },
        { start: 317, text: "That disk is definitely destroyed." },
        { start: 319, text: "Henley: Yes it is." },
        { start: 321, text: "[upbeat music]" },
        { start: 325, text: "Wong: If you didn't think these six layers of security" },
        { start: 327, text: "were enough, Google Cloud actually has" },
        { start: 330, text: "two security testing programs in place." },
        { start: 332, text: "One hires companies to try to break in" },
        { start: 334, text: "to data center sites from the outside," },
        { start: 337, text: "and the other tasks Googlers with trying to break" },
        { start: 339, text: "security protocols from the inside." },
        { start: 343, text: "And getting out of a data center is arguably even harder" },
        { start: 347, text: "than getting in, as everybody has to go through full metal detection" },
        { start: 351, text: "each time they leave the data center floor." },
        { start: 353, text: "[upbeat music]" },
        { start: 356, text: "person: Thank you, ma'am, for your cooperation." },
        { start: 357, text: "Wong: Thank you." },
        { start: 359, text: "Google Cloud supports compliance" },
        { start: 361, text: "with over 40 global standards, regulations, and certifications," },
        { start: 365, text: "and the commitment to constantly test, optimize, and improve systems" },
        { start: 369, text: "makes it a leader in data center security." },
        { start: 372, text: "Now, how do I get out of here?" },
        { start: 374, text: "[upbeat music]" }
    ];

    const [currentCaptions, setCurrentCaptions] = useState<Caption[]>([]);

    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const currentTime = e.currentTarget.currentTime;
        let captionsToShow = [];

        for (let i = 0; i < transcript.length; i++) {
            if (currentTime >= transcript[i].start && (i === transcript.length - 1 || currentTime < transcript[i + 1].start)) {
                if (i > 0) {
                    captionsToShow.push(transcript[i - 1]);
                }
                captionsToShow.push(transcript[i]);
                if (i < transcript.length - 1) {
                    captionsToShow.push(transcript[i + 1]);
                }

                break;
            }
        }

        setCurrentCaptions(captionsToShow);
    };


    const highlightWords = (captionText: string, wordsToHighlight: string[]) => {
        const words = captionText.split(' ');
        return words.map((word: string) => wordsToHighlight.includes(word) ? <span className="highlight">{word}</span> : word).join(' ');
    };

    return (
        <div className="content-wrapper">
            <div className="video-content">
                <video width="720" height="410" controls onTimeUpdate={handleTimeUpdate}>
                    <source src={require('../../assets/video/google-data-security-video.mp4')} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="subtitle-content">
                {currentCaptions.map(caption => (
                    <p >{caption.text}</p>
                ))}
            </div>
        </div>
    );
};

export default VideoCaptions;