import React, { useState, useEffect } from 'react';
import './VideoCaptions.css';

type Word = {
    time: number; // Time at which the word is spoken in seconds
    text: string;
};

type Caption = {
    start: number;
    words: Word[];
};

const VideoCaptions = () => {
    const transcript = [
        {
            start: 0,
            words: [
                { time: 0, text: '[upbeat music]' }
            ]
        },
        {
            start: 7,
            words: [
                { time: 7.0, text: 'Hi,' },
                { time: 7.5, text: "I'm" },
                { time: 8.0, text: 'Stephanie' },
                { time: 8.5, text: 'Wong,' },
                { time: 9.0, text: 'and' },
                { time: 9.5, text: 'I' },
                { time: 10.0, text: 'work' },
                { time: 10.5, text: 'for' },
                { time: 11.0, text: 'Google' },
                { time: 11.5, text: 'Cloud.' }
            ]
        },
        {
            start: 10,
            words: [
                { time: 10.0, text: "While" },
                { time: 10.2, text: "I" },
                { time: 10.4, text: "could" },
                { time: 10.6, text: "talk" },
                { time: 10.8, text: "all" },
                { time: 11.0, text: "day" },
                { time: 11.2, text: "about" },
                { time: 11.4, text: "cloud" },
                { time: 11.6, text: "security," },
            ]
        },
        {
            start: 13,
            words: [
                { time: 13.0, text: "physical" },
                { time: 13.2, text: "security" },
                { time: 13.4, text: "at" },
                { time: 13.6, text: "a" },
                { time: 13.8, text: "Google" },
                { time: 14.0, text: "data" },
                { time: 14.2, text: "center" },
            ]
        },
        {
            start: 15,
            words: [
                { time: 15.0, text: "is" },
                { time: 15.2, text: "still" },
                { time: 15.4, text: "pretty" },
                { time: 15.6, text: "new" },
                { time: 15.8, text: "to" },
                { time: 16.0, text: "me," },
            ]
        },
        {
            start: 16,
            words: [
                { time: 16.0, text: "so" },
                { time: 16.2, text: "today" },
                { time: 16.4, text: "I'm" },
                { time: 16.6, text: "on" },
                { time: 16.8, text: "a" },
                { time: 17.0, text: "mission" },
                { time: 17.2, text: "to" },
                { time: 17.4, text: "learn" },
                { time: 17.6, text: "all" },
                { time: 17.8, text: "about" },
                { time: 18.0, text: "it" },
            ]
        },
        {
            start: 19,
            words: [
                { time: 19.0, text: "by" },
                { time: 19.2, text: "taking" },
                { time: 19.4, text: "an" },
                { time: 19.6, text: "inside" },
                { time: 19.8, text: "look" },
                { time: 20.0, text: "at" },
                { time: 20.2, text: "the" },
                { time: 20.4, text: "systems" },
                { time: 20.6, text: "in" },
                { time: 20.8, text: "place" },
            ]
        },
        {
            start: 22,
            words: [
                { time: 22.0, text: "that" },
                { time: 22.1, text: "protect" },
                { time: 22.3, text: "customer" },
                { time: 22.5, text: "data" }
            ]
        },
        {
            start: 23,
            words: [
                { time: 23.0, text: "at" },
                { time: 23.2, text: "a" },
                { time: 23.4, text: "typical" },
                { time: 23.6, text: "Google" },
                { time: 23.8, text: "data" },
                { time: 24.0, text: "center." },
                { time: 24.5, text: "Let's" },
                { time: 24.7, text: "go." }
            ]
        },
        {
            start: 25,
            words: [
                { time: 25.0, text: "[upbeat" },
                { time: 25.2, text: "music]" }
            ]
        },
        {
            start: 28,
            words: [
                { time: 28.0, text: "Six" },
                { time: 28.2, text: "layers" },
                { time: 28.4, text: "of" },
                { time: 28.6, text: "security" },
                { time: 28.8, text: "here" }
            ]
        },
        {
            start: 31,
            words: [
                { time: 31.0, text: "Security" },
                { time: 31.1, text: "layer" },
                { time: 31.2, text: "one" },
                { time: 31.3, text: "refers" },
                { time: 31.4, text: "to" },
                { time: 31.5, text: "the" },
                { time: 31.6, text: "property" },
                { time: 31.7, text: "boundaries," },
            ]
        },
        {
            start: 34,
            words: [
                { time: 34.0, text: "and" },
                { time: 34.1, text: "that" },
                { time: 34.2, text: "includes" },
                { time: 34.3, text: "signage" },
                { time: 34.4, text: "and" },
                { time: 34.5, text: "fencing." },
            ]
        },
        {
            start: 37,
            words: [
                { time: 37.0, text: "But" },
                { time: 37.1, text: "things" },
                { time: 37.2, text: "really" },
                { time: 37.3, text: "start" },
                { time: 37.4, text: "to" },
                { time: 37.5, text: "get" },
                { time: 37.6, text: "interesting" },
            ]
        },
        {
            start: 38,
            words: [
                { time: 38.0, text: "when" },
                { time: 38.1, text: "it" },
                { time: 38.2, text: "comes" },
                { time: 38.3, text: "to" },
                { time: 38.4, text: "layer" },
                { time: 38.5, text: "two," },
                { time: 38.6, text: "also" },
                { time: 38.7, text: "known" },
                { time: 38.8, text: "as" },
                { time: 38.9, text: "the" },
                { time: 39.0, text: "secure" },
                { time: 39.1, text: "perimeter," },
            ]
        },
        {
            start: 42,
            words: [
                { time: 42.0, text: "and" },
                { time: 42.2, text: "that" },
                { time: 42.4, text: "includes" },
                { time: 42.6, text: "the" },
                { time: 42.8, text: "main" },
                { time: 43.0, text: "entrance" },
                { time: 43.2, text: "gate" },
                { time: 43.4, text: "which" },
                { time: 43.6, text: "I" },
                { time: 43.8, text: "am" },
                { time: 44.0, text: "pulling" },
                { time: 44.2, text: "up" },
                { time: 44.4, text: "to" },
                { time: 44.6, text: "right" },
                { time: 44.8, text: "now." },
            ]
        },
        {
            start: 46,
            words: [
                { time: 46.0, text: "[upbeat" },
                { time: 46.2, text: "music]" },
            ]
        },
        {
            start: 49,
            words: [
                { time: 49.0, text: "Hey," },
                { time: 49.2, text: "how's" },
                { time: 49.4, text: "it" },
                { time: 49.6, text: "going?" },
                { time: 49.8, text: "person:" },
                { time: 50.0, text: "Good" },
                { time: 50.2, text: "morning." },
            ]
        },
        {
            start: 51,
            words: [
                { time: 51.0, text: "[upbeat" },
                { time: 51.2, text: "music]" },
            ]
        },
        {
            start: 58,
            words: [
                { time: 58.0, text: "Layer" },
                { time: 58.2, text: "2" },
                { time: 58.4, text: "Security" },
            ]
        },
        {
            start: 58,
            words: [
                { time: 58.6, text: "Wong:" },
                { time: 59.0, text: "So" },
                { time: 59.2, text: "layer" },
                { time: 59.4, text: "two" },
                { time: 59.6, text: "has" },
                { time: 59.8, text: "a" },
                { time: 60.0, text: "lot" },
                { time: 60.2, text: "of" },
                { time: 60.4, text: "security" },
                { time: 60.6, text: "features" },
            ]
        },
        {
            start: 61,
            words: [
                { time: 61.0, text: "ranging" },
                { time: 61.2, text: "from" },
                { time: 61.4, text: "smart" },
                { time: 61.6, text: "fencing" },
                { time: 61.8, text: "to" },
                { time: 62.0, text: "overlapping" },
                { time: 62.3, text: "cameras" },
            ]
        },
        {
            start: 64,
            words: [
                { time: 64.0, text: "to" },
                { time: 64.2, text: "24/7" },
                { time: 64.4, text: "guard" },
                { time: 64.6, text: "patrols" },
                { time: 64.8, text: "and" },
                { time: 65.0, text: "more." },
            ]
        },
        {
            start: 67,
            words: [
                { time: 67.0, text: "I'm" },
                { time: 67.2, text: "on" },
                { time: 67.4, text: "my" },
                { time: 67.6, text: "way" },
                { time: 67.8, text: "to" },
                { time: 68.0, text: "meet" },
                { time: 68.2, text: "some" },
                { time: 68.4, text: "experts" },
            ]
        },
        {
            start: 69,
            words: [
                { time: 69.0, text: "who" },
                { time: 69.2, text: "are" },
                { time: 69.4, text: "going" },
                { time: 69.6, text: "to" },
                { time: 69.8, text: "show" },
                { time: 70.0, text: "me" },
                { time: 70.2, text: "how" },
                { time: 70.4, text: "it" },
                { time: 70.6, text: "all" },
                { time: 70.8, text: "works." },
            ]
        },
        {
            start: 73,
            words: [
                { time: 73.0, text: "Hi," },
                { time: 73.2, text: "Joe." },
            ]
        },
        {
            start: 73,
            words: [
                { time: 73.4, text: "Kava:" },
                { time: 73.6, text: "Hi," },
                { time: 73.8, text: "Stephanie," },
                { time: 74.0, text: "how" },
                { time: 74.2, text: "are" },
                { time: 74.4, text: "you?" },
            ]
        },
        {
            start: 75,
            words: [
                { time: 75.0, text: "Wong:" },
                { time: 75.2, text: "So" },
                { time: 75.4, text: "I" },
                { time: 75.6, text: "just" },
                { time: 75.8, text: "passed" },
                { time: 76.0, text: "the" },
                { time: 76.2, text: "main" },
                { time: 76.4, text: "gate" },
                { time: 76.6, text: "and" },
                { time: 76.8, text: "I" },
                { time: 77.0, text: "saw" },
                { time: 77.2, text: "guards" },
                { time: 77.4, text: "and" },
                { time: 77.6, text: "cameras," },
            ]
        },
        {
            start: 78,
            words: [
                { time: 78.0, text: "but" },
                { time: 78.2, text: "what" },
                { time: 78.4, text: "are" },
                { time: 78.6, text: "some" },
                { time: 78.8, text: "things" },
                { time: 79.0, text: "that" },
                { time: 79.2, text: "I" },
                { time: 79.4, text: "didn't" },
                { time: 79.6, text: "see?" },
            ]
        },
        {
            start: 80,
            words: [
                { time: 80.0, text: "Kava:" },
                { time: 80.2, text: "Yeah" },
                { time: 80.4, text: "there's" },
                { time: 80.6, text: "actually" },
                { time: 80.8, text: "a" },
                { time: 81.0, text: "lot" },
                { time: 81.2, text: "of" },
                { time: 81.4, text: "technology" },
            ]
        },
        {
            start: 82,
            words: [
                { time: 82.0, text: "and" },
                { time: 82.2, text: "operations" },
                { time: 82.4, text: "going" },
                { time: 82.6, text: "on" },
                { time: 82.8, text: "behind" },
                { time: 83.0, text: "the" },
                { time: 83.2, text: "scene." },
            ]
        },
        {
            start: 84,
            words: [
                { time: 84.0, text: "So" },
                { time: 84.2, text: "from" },
                { time: 84.4, text: "the" },
                { time: 84.6, text: "time" },
                { time: 84.8, text: "that" },
                { time: 85.0, text: "you're" },
                { time: 85.2, text: "on" },
                { time: 85.4, text: "site," },
            ]
        },
        {
            start: 86,
            words: [
                { time: 86.0, text: "we" },
                { time: 86.2, text: "know" },
                { time: 86.4, text: "that" },
                { time: 86.6, text: "you're" },
                { time: 86.8, text: "here," },
            ]
        },
        {
            start: 87,
            words: [
                { time: 87.0, text: "and" },
                { time: 87.2, text: "we're" },
                { time: 87.4, text: "able" },
                { time: 87.6, text: "to" },
                { time: 87.8, text: "do" },
                { time: 88.0, text: "correlation" },
                { time: 88.2, text: "analysis" },
            ]
        },
        {
            start: 90,
            words: [
                { time: 90.0, text: "of" },
                { time: 90.2, text: "where" },
                { time: 90.4, text: "you've" },
                { time: 90.6, text: "been." },
            ]
        },
        {
            start: 91,
            words: [
                { time: 91.0, text: "We" },
                { time: 91.2, text: "have" },
                { time: 91.4, text: "guards" },
                { time: 91.6, text: "in" },
                { time: 91.8, text: "vehicles," },
                { time: 92.0, text: "we" },
                { time: 92.2, text: "have" },
                { time: 92.4, text: "some" },
                { time: 92.6, text: "guards" },
                { time: 92.8, text: "on" },
                { time: 93.0, text: "foot." },
            ]
        },
        {
            start: 94,
            words: [
                { time: 94.0, text: "There's" },
                { time: 94.2, text: "also" },
                { time: 94.4, text: "the" },
                { time: 94.6, text: "vehicle" },
                { time: 94.8, text: "crash" },
                { time: 95.0, text: "barrier." },
            ]
        },
        {
            start: 97,
            words: [
                { time: 97.0, text: "That's" },
                { time: 97.2, text: "designed" },
                { time: 97.4, text: "to" },
                { time: 97.6, text: "stop" },
                { time: 97.8, text: "a" },
                { time: 98.0, text: "fully" },
                { time: 98.2, text: "loaded" },
                { time: 98.4, text: "truck" },
                { time: 98.6, text: "from" },
                { time: 98.8, text: "crashing" },
                { time: 99.0, text: "through" },
                { time: 99.2, text: "the" },
                { time: 99.4, text: "front" },
                { time: 99.6, text: "entrance." },
            ]
        },
        {
            start: 102,
            words: [
                { time: 102.0, text: "Wong:" },
                { time: 102.2, text: "Ricky," },
                { time: 102.4, text: "Tarik," },
                { time: 102.6, text: "can" },
                { time: 102.8, text: "you" },
                { time: 103.0, text: "tell" },
                { time: 103.2, text: "me" },
                { time: 103.4, text: "more" },
                { time: 103.6, text: "about" },
                { time: 103.8, text: "what's" },
                { time: 104.0, text: "unique" },
                { time: 104.2, text: "about" },
                { time: 104.4, text: "the" },
                { time: 104.6, text: "fencing?" },
            ]
        },
        {
            start: 105,
            words: [
                { time: 105.0, text: "Gordon:" },
                { time: 105.2, text: "This" },
                { time: 105.4, text: "particular" },
                { time: 105.6, text: "fence" },
                { time: 105.8, text: "is" },
                { time: 106.0, text: "an" },
                { time: 106.2, text: "anti-climb" },
                { time: 106.4, text: "fence." },
            ]
        },
        {
            start: 108,
            words: [
                { time: 108.0, text: "It's" },
                { time: 108.2, text: "also" },
                { time: 108.4, text: "equipped" },
                { time: 108.6, text: "with" },
                { time: 108.8, text: "fiber." },
                { time: 109.0, text: "The" },
                { time: 109.2, text: "technology" },
                { time: 109.4, text: "tells" },
                { time: 109.6, text: "us" },
            ]
        },
        {
            start: 112,
            words: [
                { time: 112.0, text: "if" },
                { time: 112.2, text: "someone's" },
                { time: 112.4, text: "near" },
                { time: 112.6, text: "the" },
                { time: 112.8, text: "fence" },
                { time: 113.0, text: "or" },
                { time: 113.2, text: "touches" },
                { time: 113.4, text: "the" },
                { time: 113.6, text: "fence." },
            ]
        },
        {
            start: 115,
            words: [
                { time: 115.0, text: "Billingsley:" },
                { time: 115.2, text: "So" },
                { time: 115.4, text: "we" },
                { time: 115.6, text: "use" },
                { time: 115.8, text: "thermal" },
                { time: 116.0, text: "cameras" },
                { time: 116.2, text: "and" },
                { time: 116.4, text: "standard" },
                { time: 116.6, text: "cameras." },
            ]
        },
        {
            start: 117,
            words: [
                { time: 117.0, text: "So" },
                { time: 117.2, text: "we're" },
                { time: 117.4, text: "able" },
                { time: 117.6, text: "to" },
                { time: 117.8, text: "see" },
                { time: 118.0, text: "video" },
                { time: 118.2, text: "footage" },
                { time: 118.4, text: "at" },
                { time: 118.6, text: "night" },
            ]
        },
        {
            start: 120,
            words: [
                { time: 120.0, text: "just" },
                { time: 120.2, text: "as" },
                { time: 120.4, text: "clearly" },
                { time: 120.6, text: "as" },
                { time: 120.8, text: "we" },
                { time: 121.0, text: "can" },
                { time: 121.2, text: "during" },
                { time: 121.4, text: "the" },
                { time: 121.6, text: "day." },
            ]
        },
        {
            start: 123,
            words: [
                { time: 123.0, text: "[light" },
                { time: 123.2, text: "electronic" },
                { time: 123.4, text: "music]" },
            ]
        },
        {
            start: 127,
            words: [
                { time: 127.0, text: "Layer" },
                { time: 127.2, text: "3" },
                { time: 127.4, text: "Security" },
            ]
        },
        {
            start: 127,
            words: [
                { time: 127.6, text: "Wong:" },
                { time: 128.0, text: "Welcome" },
                { time: 128.2, text: "to" },
                { time: 128.4, text: "layer" },
                { time: 128.6, text: "three," },
                { time: 128.8, text: "building" },
                { time: 129.0, text: "access." },
            ]
        },
        {
            start: 130,
            words: [
                { time: 130.0, text: "But" },
                { time: 130.2, text: "just" },
                { time: 130.4, text: "so" },
                { time: 130.6, text: "you" },
                { time: 130.8, text: "know," },
                { time: 131.0, text: "I" },
                { time: 131.2, text: "am" },
                { time: 131.4, text: "still" },
                { time: 131.6, text: "nowhere" },
                { time: 131.8, text: "near" },
                { time: 132.0, text: "the" },
                { time: 132.2, text: "data" },
                { time: 132.4, text: "center" },
                { time: 132.6, text: "floor." },
            ]
        },
        {
            start: 134,
            words: [
                { time: 134.0, text: "That's" },
                { time: 134.2, text: "a" },
                { time: 134.4, text: "few" },
                { time: 134.6, text: "more" },
                { time: 134.8, text: "layers" },
                { time: 135.0, text: "deep." },
                { time: 135.2, text: "Let's" },
                { time: 135.4, text: "head" },
                { time: 135.6, text: "inside." },
            ]
        },
        {
            start: 134,
            words: [
                { time: 134.0, text: "That's" },
                { time: 134.2, text: "a" },
                { time: 134.4, text: "few" },
                { time: 134.6, text: "more" },
                { time: 134.8, text: "layers" },
                { time: 135.0, text: "deep." },
                { time: 135.2, text: "Let's" },
                { time: 135.4, text: "head" },
                { time: 135.6, text: "inside." },
            ]
        },
        {
            start: 137,
            words: [
                { time: 137.0, text: "O'Brien:" },
                { time: 137.2, text: "Stephanie." },
            ]
        },
        {
            start: 138,
            words: [
                { time: 138.0, text: "Wong:" },
                { time: 138.2, text: "Hello." },
            ]
        },
        {
            start: 140,
            words: [
                { time: 140.0, text: "O'Brien:" },
                { time: 140.2, text: "So" },
                { time: 140.4, text: "you've" },
                { time: 140.6, text: "gotten" },
                { time: 140.8, text: "through" },
                { time: 141.0, text: "the" },
                { time: 141.2, text: "gate," },
                { time: 141.4, text: "you've" },
                { time: 141.6, text: "come" },
                { time: 141.8, text: "in," },
            ]
        },
        {
            start: 141,
            words: [
                { time: 141.0, text: "you've" },
                { time: 141.2, text: "come" },
                { time: 141.4, text: "in" },
                { time: 141.6, text: "to" },
                { time: 141.8, text: "our" },
                { time: 142.0, text: "secure" },
                { time: 142.2, text: "lobby." },
            ]
        },
        {
            start: 144,
            words: [
                { time: 144.0, text: "You" },
                { time: 144.2, text: "have" },
                { time: 144.4, text: "your" },
                { time: 144.6, text: "card," },
                { time: 144.8, text: "and" },
                { time: 145.0, text: "we" },
                { time: 145.2, text: "know" },
                { time: 145.4, text: "that" },
                { time: 145.6, text: "that's" },
                { time: 145.8, text: "you," },
            ]
        },
        {
            start: 146,
            words: [
                { time: 146.0, text: "but" },
                { time: 146.2, text: "if" },
                { time: 146.4, text: "someone" },
                { time: 146.6, text: "happened" },
                { time: 146.8, text: "to" },
                { time: 147.0, text: "lose" },
                { time: 147.2, text: "their" },
                { time: 147.4, text: "card," },
            ]
        },
        {
            start: 149,
            words: [
                { time: 149.0, text: "what" },
                { time: 149.2, text: "we" },
                { time: 149.4, text: "want" },
                { time: 149.6, text: "to" },
                { time: 149.8, text: "make" },
                { time: 150.0, text: "sure" },
                { time: 150.2, text: "is" },
                { time: 150.4, text: "that" },
                { time: 150.6, text: "it's" },
                { time: 150.8, text: "actually" },
                { time: 151.0, text: "Stephanie" },
                { time: 151.2, text: "who" },
                { time: 151.4, text: "has" },
                { time: 151.6, text: "shown" },
                { time: 151.8, text: "up." },
            ]
        },
        {
            start: 154,
            words: [
                { time: 154.0, text: "scanner:" },
                { time: 154.2, text: "Please" },
                { time: 154.4, text: "center" },
                { time: 154.6, text: "your" },
                { time: 154.8, text: "eye." },
            ]
        },
        {
            start: 156,
            words: [
                { time: 156.0, text: "O'Brien:" },
                { time: 156.2, text: "And" },
                { time: 156.4, text: "with" },
                { time: 156.6, text: "iris" },
                { time: 156.8, text: "scan," },
                { time: 157.0, text: "we" },
                { time: 157.2, text: "can" },
                { time: 157.4, text: "authenticate" },
                { time: 157.6, text: "that" },
                { time: 157.8, text: "it's" },
                { time: 158.0, text: "actually" },
                { time: 158.2, text: "you" },
                { time: 158.4, text: "along" },
                { time: 158.6, text: "with" },
                { time: 158.8, text: "your" },
                { time: 159.0, text: "ID." },
            ]
        },
        {
            start: 161,
            words: [
                { time: 161.0, text: "Wong:" },
                { time: 161.2, text: "Okay," },
                { time: 161.4, text: "I" },
                { time: 161.6, text: "think" },
                { time: 161.8, text: "it's" },
                { time: 162.0, text: "good." },
            ]
        },
        {
            start: 165,
            words: [
                { time: 165.0, text: "One" },
                { time: 165.2, text: "thing" },
                { time: 165.4, text: "that's" },
                { time: 165.6, text: "a" },
                { time: 165.8, text: "little" },
                { time: 166.0, text: "hard" },
                { time: 166.2, text: "to" },
                { time: 166.4, text: "get" },
                { time: 166.6, text: "used" },
                { time: 166.8, text: "to" },
            ]
        },
        {
            start: 167,
            words: [
                { time: 167.0, text: "when" },
                { time: 167.2, text: "you" },
                { time: 167.4, text: "visit" },
                { time: 167.6, text: "a" },
                { time: 167.8, text: "data" },
                { time: 168.0, text: "center" },
                { time: 168.2, text: "is," },
            ]
        },
        {
            start: 169,
            words: [
                { time: 169.0, text: "for" },
                { time: 169.2, text: "secure" },
                { time: 169.4, text: "areas," },
                { time: 169.6, text: "only" },
                { time: 169.8, text: "one" },
                { time: 170.0, text: "person" },
                { time: 170.2, text: "is" },
                { time: 170.4, text: "allowed" },
                { time: 170.6, text: "to" },
                { time: 170.8, text: "badge" },
                { time: 171.0, text: "through" },
                { time: 171.2, text: "a" },
                { time: 171.4, text: "door" },
                { time: 171.6, text: "at" },
                { time: 171.8, text: "a" },
                { time: 172.0, text: "time." },
            ]
        },
        {
            start: 175,
            words: [
                { time: 175.0, text: "[light" },
                { time: 175.2, text: "electronic" },
                { time: 175.4, text: "music]" },
            ]
        },
        {
            start: 182,
            words: [
                { time: 182.0, text: "Layer" },
                { time: 182.2, text: "four" },
                { time: 182.4, text: "includes" },
                { time: 182.6, text: "the" },
                { time: 182.8, text: "security" },
                { time: 183.0, text: "operations" },
                { time: 183.2, text: "center," },
                { time: 183.4, text: "or" },
                { time: 183.6, text: "SOC," },
                { time: 183.8, text: "a" },
                { time: 184.0, text: "hive" },
                { time: 184.2, text: "of" },
                { time: 184.4, text: "activity" },
                { time: 184.6, text: "that" },
                { time: 184.8, text: "is" },
                { time: 185.0, text: "monitoring" },
                { time: 185.2, text: "the" },
                { time: 185.4, text: "data" },
                { time: 185.6, text: "center" },
                { time: 185.8, text: "24/7," },
                { time: 186.0, text: "365" },
                { time: 186.2, text: "days" },
                { time: 186.4, text: "a" },
                { time: 186.6, text: "year." },
            ]
        },
        {
            start: 189,
            words: [
                { time: 189.0, text: "[light" },
                { time: 189.2, text: "electronic" },
                { time: 189.4, text: "music]" },
            ]
        },
        {
            start: 196,
            words: [
                { time: 196.0, text: "So" },
                { time: 196.2, text: "it" },
                { time: 196.4, text: "sounds" },
                { time: 196.6, text: "like" },
                { time: 196.8, text: "we've" },
                { time: 197.0, text: "been" },
                { time: 197.2, text: "keeping" },
                { time: 197.4, text: "them" },
                { time: 197.6, text: "very" },
                { time: 197.8, text: "busy" },
                { time: 198.0, text: "today." },
            ]
        },
        {
            start: 199,
            words: [
                { time: 199.0, text: "Davis:" },
                { time: 199.2, text: "Yes," },
                { time: 199.4, text: "yes" },
                { time: 199.6, text: "you" },
                { time: 199.8, text: "have." },
            ]
        },
        {
            start: 201,
            words: [
                { time: 201.0, text: "So" },
                { time: 201.2, text: "the" },
                { time: 201.4, text: "doors," },
                { time: 201.6, text: "the" },
                { time: 201.8, text: "cameras," },
                { time: 202.0, text: "the" },
                { time: 202.2, text: "badge" },
                { time: 202.4, text: "readers," },
            ]
        },
        {
            start: 204,
            words: [
                { time: 204.0, text: "the" },
                { time: 204.2, text: "iris" },
                { time: 204.4, text: "scan--" },
                { time: 204.6, text: "everything" },
                { time: 204.8, text: "is" },
                { time: 205.0, text: "connected" },
                { time: 205.2, text: "here." },
            ]
        },
        {
            start: 206,
            words: [
                { time: 206.0, text: "This" },
                { time: 206.2, text: "is" },
                { time: 206.4, text: "the" },
                { time: 206.6, text: "brains" },
                { time: 206.8, text: "of" },
                { time: 207.0, text: "the" },
                { time: 207.2, text: "security" },
                { time: 207.4, text: "system." },
            ]
        },
        {
            start: 209,
            words: [
                { time: 209.0, text: "So" },
                { time: 209.2, text: "if" },
                { time: 209.4, text: "there's" },
                { time: 209.6, text: "anything" },
                { time: 209.8, text: "out" },
                { time: 210.0, text: "of" },
                { time: 210.2, text: "the" },
                { time: 210.4, text: "ordinary" },
                { time: 210.6, text: "happening," },
            ]
        },
        {
            start: 212,
            words: [
                { time: 212.0, text: "they" },
                { time: 212.2, text: "have" },
                { time: 212.4, text: "to" },
                { time: 212.6, text: "be" },
                { time: 212.8, text: "able" },
                { time: 213.0, text: "to" },
                { time: 213.2, text: "pick" },
                { time: 213.4, text: "that" },
                { time: 213.6, text: "up." },
            ]
        },
        {
            start: 222,
            words: [
                { time: 222.0, text: "[upbeat" },
                { time: 222.2, text: "music]" },
            ]
        },
        {
            start: 230,
            words: [
                { time: 230.0, text: "Layer" },
                { time: 230.2, text: "5" },
                { time: 230.4, text: "Security" },
            ]
        },
        {
            start: 230, // Continuing directly for seamless narrative
            words: [
                { time: 230.6, text: "Wong:" },
                { time: 231.0, text: "Interesting" },
                { time: 231.4, text: "fact" },
                { time: 231.8, text: "about" },
                { time: 232.2, text: "layer" },
                { time: 232.6, text: "five," },
            ]
        },
        {
            start: 233,
            words: [
                { time: 233.0, text: "the" },
                { time: 233.2, text: "data" },
                { time: 233.4, text: "center" },
                { time: 233.6, text: "floor:" },
            ]
        },
        {
            start: 237,
            words: [
                { time: 237.0, text: "So" },
                { time: 237.2, text: "right" },
                { time: 237.4, text: "now," },
                { time: 237.6, text: "I'm" },
                { time: 237.8, text: "feeling" },
                { time: 238.0, text: "kinda" },
                { time: 238.2, text: "special." },
            ]
        },
        {
            start: 248,
            words: [
                { time: 248.0, text: "Kava:" },
                { time: 248.2, text: "This" },
                { time: 248.4, text: "is" },
                { time: 248.6, text: "truly" },
                { time: 248.8, text: "a" },
                { time: 249.0, text: "as-needed" },
                { time: 249.2, text: "only" },
                { time: 249.4, text: "access" },
                { time: 249.6, text: "area," },
            ]
        },
        {
            start: 252,
            words: [
                { time: 252.0, text: "meaning" },
                { time: 252.2, text: "that" },
                { time: 252.4, text: "only" },
                { time: 252.6, text: "the" },
                { time: 252.8, text: "technicians" },
                { time: 253.0, text: "and" },
                { time: 253.2, text: "engineers" },
                { time: 253.4, text: "that" },
                { time: 253.6, text: "have" },
                { time: 253.8, text: "to" },
                { time: 254.0, text: "be" },
                { time: 254.2, text: "there" },
            ]
        },
        {
            start: 256,
            words: [
                { time: 256.0, text: "to" },
                { time: 256.2, text: "maintain," },
                { time: 256.4, text: "upgrade," },
                { time: 256.6, text: "or" },
                { time: 256.8, text: "repair" },
                { time: 257.0, text: "the" },
                { time: 257.2, text: "equipment" },
                { time: 257.4, text: "are" },
                { time: 257.6, text: "ever" },
                { time: 257.8, text: "allowed" },
                { time: 258.0, text: "there." },
            ]
        },
        {
            start: 262,
            words: [
                { time: 262.0, text: "Wong:" },
                { time: 262.2, text: "And" },
                { time: 262.4, text: "do" },
                { time: 262.6, text: "Googlers" },
                { time: 262.8, text: "or" },
                { time: 263.0, text: "anyone" },
                { time: 263.2, text: "have" },
                { time: 263.4, text: "access" },
                { time: 263.6, text: "to" },
                { time: 263.8, text: "the" },
                { time: 264.0, text: "data?" },
            ]
        },
        {
            start: 265,
            words: [
                { time: 265.0, text: "Kava:" },
                { time: 265.2, text: "We" },
                { time: 265.4, text: "have" },
                { time: 265.6, text: "access" },
                { time: 265.8, text: "to" },
                { time: 266.0, text: "the" },
                { time: 266.2, text: "devices," },
                { time: 266.4, text: "but" },
                { time: 266.6, text: "the" },
                { time: 266.8, text: "data" },
                { time: 267.0, text: "at" },
                { time: 267.2, text: "rest" },
                { time: 267.4, text: "is" },
                { time: 267.6, text: "encrypted," },
            ]
        },
        {
            start: 268,
            words: [
                { time: 268.0, text: "and" },
                { time: 268.2, text: "our" },
                { time: 268.4, text: "customers" },
                { time: 268.6, text: "can" },
                { time: 268.8, text: "issue" },
                { time: 269.0, text: "and" },
                { time: 269.2, text: "keep" },
                { time: 269.4, text: "their" },
                { time: 269.6, text: "own" },
                { time: 269.8, text: "encryption" },
                { time: 270.0, text: "keys," },
            ]
        },
        {
            start: 271,
            words: [
                { time: 271.0, text: "and" },
                { time: 271.2, text: "we" },
                { time: 271.4, text: "do" },
                { time: 271.6, text: "this" },
                { time: 271.8, text: "because" },
                { time: 272.0, text: "protecting" },
                { time: 272.2, text: "the" },
                { time: 272.4, text: "privacy" },
            ]
        },
        {
            start: 273,
            words: [
                { time: 273.0, text: "and" },
                { time: 273.2, text: "the" },
                { time: 273.4, text: "security" },
                { time: 273.6, text: "of" },
                { time: 273.8, text: "our" },
                { time: 274.0, text: "users'" },
                { time: 274.2, text: "data" },
                { time: 274.4, text: "is" },
                { time: 274.6, text: "our" },
                { time: 274.8, text: "highest" },
                { time: 275.0, text: "priority." },
            ]
        },
        {
            start: 281,
            words: [
                { time: 281.0, text: "Layer" },
                { time: 281.2, text: "6" },
                { time: 281.4, text: "Security" },
            ]
        },
        {
            start: 284,
            words: [
                { time: 284.0, text: "Wong:" },
                { time: 284.2, text: "The" },
                { time: 284.4, text: "mysterious" },
                { time: 284.6, text: "layer" },
                { time: 284.8, text: "six," },
                { time: 285.0, text: "where" },
                { time: 285.2, text: "disks" },
            ]
        },
        {
            start: 287,
            words: [
                { time: 287.0, text: "are" },
                { time: 287.2, text: "erased" },
                { time: 287.4, text: "and" },
                { time: 287.6, text: "destroyed" },
                { time: 287.8, text: "and" },
                { time: 288.0, text: "the" },
                { time: 288.2, text: "fewest" },
                { time: 288.4, text: "number" },
                { time: 288.6, text: "of" },
                { time: 288.8, text: "people" },
                { time: 289.0, text: "are" },
                { time: 289.2, text: "allowed" },
                { time: 289.4, text: "to" },
                { time: 289.6, text: "enter." },
            ]
        },
        {
            start: 291,
            words: [
                { time: 291.0, text: "Drives" },
                { time: 291.2, text: "that" },
                { time: 291.4, text: "need" },
                { time: 291.6, text: "to" },
                { time: 291.8, text: "be" },
                { time: 292.0, text: "retired" },
                { time: 292.2, text: "from" },
                { time: 292.4, text: "the" },
                { time: 292.6, text: "data" },
                { time: 292.8, text: "center" },
                { time: 293.0, text: "floor" },
            ]
        },
        {
            start: 295,
            words: [
                { time: 295.0, text: "come" },
                { time: 295.2, text: "into" },
                { time: 295.4, text: "this" },
                { time: 295.6, text: "room" },
                { time: 295.8, text: "through" },
                { time: 295.8, text: "through" },
                { time: 296.0, text: "a" },
                { time: 296.2, text: "secure" },
                { time: 296.4, text: "two-way" },
                { time: 296.6, text: "locker" },
                { time: 296.8, text: "system," },
            ]
        },
        {
            start: 298,
            words: [
                { time: 298.0, text: "which" },
                { time: 298.2, text: "means" },
                { time: 298.4, text: "that" },
                { time: 298.6, text: "only" },
                { time: 298.8, text: "technicians" },
                { time: 299.0, text: "assigned" },
                { time: 299.2, text: "to" },
                { time: 299.4, text: "this" },
                { time: 299.6, text: "room" },
            ]
        },
        {
            start: 300,
            words: [
                { time: 300.0, text: "can" },
                { time: 300.2, text: "pull" },
                { time: 300.4, text: "them" },
                { time: 300.6, text: "from" },
                { time: 300.8, text: "that" },
                { time: 301.0, text: "locker" },
                { time: 301.2, text: "to" },
                { time: 301.4, text: "either" },
                { time: 301.6, text: "erase" },
                { time: 301.8, text: "or" },
                { time: 302.0, text: "destroy" },
                { time: 302.2, text: "them." },
            ]
        },
        {
            start: 304,
            words: [
                { time: 304.0, text: "Henley:" },
                { time: 304.2, text: "All" },
                { time: 304.4, text: "right," },
                { time: 304.6, text: "welcome" },
                { time: 304.8, text: "to" },
                { time: 305.0, text: "the" },
                { time: 305.2, text: "crusher" },
                { time: 305.4, text: "room." },
            ]
        },
        {
            start: 307,
            words: [
                { time: 307.0, text: "Wong:" },
                { time: 307.2, text: "Wow." },
            ]
        },
        {
            start: 307,
            words: [
                { time: 307.0, text: "Henley:" },
                { time: 307.2, text: "So" },
                { time: 307.4, text: "at" },
                { time: 307.6, text: "this" },
                { time: 307.8, text: "point," },
                { time: 308.0, text: "we" },
                { time: 308.2, text: "have" },
                { time: 308.4, text: "scanned" },
                { time: 308.6, text: "the" },
                { time: 308.8, text: "hard" },
                { time: 309.0, text: "drive," },
            ]
        },
        {
            start: 311,
            words: [
                { time: 311.0, text: "and" },
                { time: 311.2, text: "the" },
                { time: 311.4, text: "software" },
                { time: 311.6, text: "has" },
                { time: 311.8, text: "told" },
                { time: 312.0, text: "us" },
                { time: 312.2, text: "that" },
                { time: 312.4, text: "we" },
                { time: 312.6, text: "need" },
                { time: 312.8, text: "to" },
                { time: 313.0, text: "destroy" },
                { time: 313.2, text: "it." },
            ]
        },
        {
            start: 315,
            words: [
                { time: 315.0, text: "Wong:" },
                { time: 315.2, text: "Can" },
                { time: 315.4, text: "we" },
                { time: 315.6, text: "see" },
                { time: 315.8, text: "it" },
                { time: 316.0, text: "in" },
                { time: 316.2, text: "action?" },
            ]
        },
        {
            start: 317,
            words: [
                { time: 317.0, text: "Henley:" },
                { time: 317.2, text: "Back" },
                { time: 317.4, text: "up." },
            ]
        },
        {
            start: 317,
            words: [
                { time: 317.0, text: "Wong:" },
                { time: 317.2, text: "All" },
                { time: 317.4, text: "right." },
                { time: 317.6, text: "I'll" },
                { time: 317.8, text: "stay" },
                { time: 318.0, text: "back" },
                { time: 318.2, text: "here." },
            ]
        },
        {
            start: 319,
            words: [
                { time: 319.0, text: "[both" },
                { time: 319.2, text: "laugh]" },
            ]
        },
        {
            start: 319,
            words: [
                { time: 319.0, text: "[mechanical" },
                { time: 319.2, text: "whirring]" },
            ]
        },
        {
            start: 321,
            words: [
                { time: 321.0, text: "That" },
                { time: 321.2, text: "disk" },
                { time: 321.4, text: "is" },
                { time: 321.6, text: "definitely" },
                { time: 321.8, text: "destroyed." },
            ]
        },
        {
            start: 323,
            words: [
                { time: 323.0, text: "Henley:" },
                { time: 323.2, text: "Yes" },
                { time: 323.4, text: "it" },
                { time: 323.6, text: "is." },
            ]
        },
        {
            start: 325,
            words: [
                { time: 325.0, text: "[upbeat" },
                { time: 325.2, text: "music]" },
            ]
        },
        {
            start: 325,
            words: [
                { time: 325.0, text: "Wong:" },
                { time: 325.2, text: "If" },
                { time: 325.4, text: "you" },
                { time: 325.6, text: "didn't" },
                { time: 325.8, text: "think" },
                { time: 326.0, text: "these" },
                { time: 326.2, text: "six" },
                { time: 326.4, text: "layers" },
                { time: 326.6, text: "of" },
                { time: 326.8, text: "security" },
            ]
        },
        {
            start: 327,
            words: [
                { time: 327.0, text: "were" },
                { time: 327.2, text: "enough," },
                { time: 327.4, text: "Google" },
                { time: 327.6, text: "Cloud" },
                { time: 327.8, text: "actually" },
                { time: 328.0, text: "has" },
                { time: 328.2, text: "two" },
                { time: 328.4, text: "security" },
                { time: 328.6, text: "testing" },
                { time: 328.8, text: "programs" },
            ]
        },
        {
            start: 329,
            words: [
                { time: 329.0, text: "in" },
                { time: 329.2, text: "place." },
            ]
        },
        {
            start: 332,
            words: [
                { time: 332.0, text: "One" },
                { time: 332.2, text: "hires" },
                { time: 332.4, text: "companies" },
                { time: 332.6, text: "to" },
                { time: 332.8, text: "try" },
                { time: 333.0, text: "to" },
                { time: 333.2, text: "break" },
                { time: 333.4, text: "in" },
                { time: 333.6, text: "to" },
                { time: 333.8, text: "data" },
                { time: 334.0, text: "center" },
                { time: 334.2, text: "sites" },
                { time: 334.4, text: "from" },
                { time: 334.6, text: "the" },
                { time: 334.8, text: "outside," },
            ]
        },
        {
            start: 337,
            words: [
                { time: 337.0, text: "and" },
                { time: 337.2, text: "the" },
                { time: 337.4, text: "other" },
                { time: 337.6, text: "tasks" },
                { time: 337.8, text: "Googlers" },
                { time: 338.0, text: "with" },
                { time: 338.2, text: "trying" },
                { time: 338.4, text: "to" },
                { time: 338.6, text: "break" },
                { time: 338.8, text: "security" },
                { time: 339.0, text: "protocols" },
                { time: 339.2, text: "from" },
                { time: 339.4, text: "the" },
                { time: 339.6, text: "inside." },
            ]
        },
        {
            start: 343,
            words: [
                { time: 343.0, text: "And" },
                { time: 343.2, text: "getting" },
                { time: 343.4, text: "out" },
                { time: 343.6, text: "of" },
                { time: 343.8, text: "a" },
                { time: 344.0, text: "data" },
                { time: 344.2, text: "center" },
                { time: 344.4, text: "is" },
                { time: 344.6, text: "arguably" },
                { time: 344.8, text: "even" },
                { time: 345.0, text: "harder" },
            ]
        },
        {
            start: 347,
            words: [
                { time: 347.0, text: "than" },
                { time: 347.2, text: "getting" },
                { time: 347.4, text: "in," },
                { time: 347.6, text: "as" },
                { time: 347.8, text: "everybody" },
                { time: 348.0, text: "has" },
                { time: 348.2, text: "to" },
                { time: 348.4, text: "go" },
                { time: 348.6, text: "through" },
                { time: 348.8, text: "full" },
                { time: 349.0, text: "metal" },
            ]
        },
        {
            start: 351,
            words: [
                { time: 351.0, text: "detection" },
                { time: 351.2, text: "each" },
                { time: 351.4, text: "time" },
                { time: 351.6, text: "they" },
                { time: 351.8, text: "leave" },
                { time: 352.0, text: "the" },
                { time: 352.2, text: "data" },
                { time: 352.4, text: "center" },
                { time: 352.6, text: "floor." },
            ]
        },
        {
            start: 353,
            words: [
                { time: 353.0, text: "[upbeat" },
                { time: 353.2, text: "music]" },
            ]
        },
        {
            start: 359,
            words: [
                { time: 359.0, text: "Henley:" },
                { time: 359.2, text: "We're" },
                { time: 359.4, text: "headed" },
                { time: 359.6, text: "downstairs." },
            ]
        },
        {
            start: 361,
            words: [
                { time: 361.0, text: "Wong:" },
                { time: 361.2, text: "Okay." },
            ]
        },
        {
            start: 365,
            words: [
                { time: 365.0, text: "Henley:" },
                { time: 365.2, text: "There's" },
                { time: 365.4, text: "another" },
                { time: 365.6, text: "facility" },
                { time: 365.8, text: "to" },
                { time: 366.0, text: "check" },
                { time: 366.2, text: "out" },
                { time: 366.4, text: "here." },
            ]
        },
        {
            start: 367,
            words: [
                { time: 367.0, text: "Wong:" },
                { time: 367.2, text: "Great." },
            ]
        },
        {
            start: 369,
            words: [
                { time: 369.0, text: "[upbeat" },
                { time: 369.2, text: "music]" },
            ]
        },
        {
            start: 373,
            words: [
                { time: 373.0, text: "Henley:" },
                { time: 373.2, text: "So" },
                { time: 373.4, text: "welcome" },
                { time: 373.6, text: "to" },
                { time: 373.8, text: "Layer" },
                { time: 374.0, text: "5," },
                { time: 374.2, text: "where" },
                { time: 374.4, text: "your" },
                { time: 374.6, text: "data" },
                { time: 374.8, text: "is" },
                { time: 375.0, text: "safe," },
            ]
        },
        {
            start: 377,
            words: [
                { time: 377.0, text: "secure," },
                { time: 377.2, text: "and" },
                { time: 377.4, text: "managed." },
            ]
        },
        {
            start: 381,
            words: [
                { time: 381.0, text: "[upbeat" },
                { time: 381.2, text: "music]" },
            ]
        },
        {
            start: 382,
            words: [
                { time: 382.0, text: "Wong:" },
                { time: 382.2, text: "Layer" },
                { time: 382.4, text: "5." },
            ]
        },
        {
            start: 383,
            words: [
                { time: 383.0, text: "Where" },
                { time: 383.2, text: "is" },
                { time: 383.4, text: "Layer" },
                { time: 383.6, text: "4?" },
            ]
        },
        {
            start: 385,
            words: [
                { time: 385.0, text: "Henley:" },
                { time: 385.2, text: "That's" },
                { time: 385.4, text: "a" },
                { time: 385.6, text: "good" },
                { time: 385.8, text: "question." },
            ]
        },
        {
            start: 387,
            words: [
                { time: 387.0, text: "Wong:" },
                { time: 387.2, text: "Maybe" },
                { time: 387.4, text: "we" },
                { time: 387.6, text: "don't" },
                { time: 387.8, text: "talk" },
                { time: 388.0, text: "about" },
                { time: 388.2, text: "that." },
            ]
        },
        {
            start: 389,
            words: [
                { time: 389.0, text: "[laughter]" },
            ]
        },
        {
            start: 389,
            words: [
                { time: 389.0, text: "[upbeat" },
                { time: 389.2, text: "music]" },
            ]
        },
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [currentCaption, setCurrentCaption] = useState<Caption | null>(null);
    const [nextCaption, setNextCaption] = useState<Caption | null>(null);

    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const currentTime = e.currentTarget.currentTime;
        let activeCaption = null;
        let nextActiveCaption = null;

        for (let i = 0; i < transcript.length; i++) {
            if (currentTime >= transcript[i].start && (i === transcript.length - 1 || currentTime < transcript[i + 1].start)) {
                activeCaption = transcript[i];
                nextActiveCaption = i < transcript.length - 1 ? transcript[i + 1] : null;
                break;
            }
        }

        if (activeCaption) {
            let wordIndex = activeCaption.words.findIndex(word => currentTime < word.time);
            wordIndex = wordIndex === -1 ? activeCaption.words.length - 1 : wordIndex - 1;
            setCurrentCaption(activeCaption);
            setNextCaption(nextActiveCaption);
            setCurrentWordIndex(wordIndex);
        }
    };
    const renderCaptionText = (caption: Caption | null, wordIndex: number, isCurrentCaption: boolean) => {
        return caption ? (
            <p>
                {caption.words.map((word, index) => {
                    const isHighlighted = isCurrentCaption && index === wordIndex;
                    const wordElement = isHighlighted ? (
                        <span key={index} className="highlight">{word.text}</span>
                    ) : (
                        <span key={index}>{word.text}</span>
                    );
                    return index < caption.words.length - 1 ? [wordElement, ' '] : wordElement;
                })}
            </p>
        ) : null;
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
                {renderCaptionText(currentCaption, currentWordIndex, true)}
                {renderCaptionText(nextCaption, 0, currentCaption === null)}
            </div>
        </div>
    );
};

export default VideoCaptions;
