// This file was previously a placeholder. Content has been added to resolve module import errors.
import { WordList } from './types';
import { learningWordList } from './data/learning';
import { sportsWordList } from './data/sports';
import { environmentalWordList } from './data/environmental';
import { cityWordList } from './data/city';
import { generalWordList } from './data/general';
import { entertainmentWordList } from './data/entertainment';
import { workWordList } from './data/work';
import { socialWordList } from './data/social';
import { societyWordList } from './data/society';
import { travelWordList } from './data/travel';
import { technologyWordList } from './data/technology';
import {
    skillsUnit1,
    skillsUnit2,
    skillsUnit3,
    skillsUnit4,
    skillsUnit5,
    skillsUnit6,
    skillsUnit7,
    skillsUnit8,
} from './data';


export const wordLists: WordList[] = [
    learningWordList,
    sportsWordList,
    environmentalWordList,
    technologyWordList,
    cityWordList,
    entertainmentWordList,
    workWordList,
    socialWordList,
    societyWordList,
    generalWordList,
    travelWordList,
    skillsUnit1,
    skillsUnit2,
    skillsUnit3,
    skillsUnit4,
    skillsUnit5,
    skillsUnit6,
    skillsUnit7,
    skillsUnit8,
];