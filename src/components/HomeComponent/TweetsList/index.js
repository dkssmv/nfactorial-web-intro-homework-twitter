import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from "../images";
import Tweet from './Tweet';

export default function TweetsList(){
    const tweets = [
        {
            authorName: 'Free KZ today',
            authorUsername: '@kz',
            img: KZ_IMG_PATH,
            content: 'Update: ahahahtyhfhdhvnkgh opoop maenthlf.',
            replies: 200,
            retweets: 1000,
            likes: 500
        },

        {
            authorName: 'nFactorial',
            authorUsername: '@nfactorial',
            img: NFACTORIAL_IMG_PATH,
            content: 'Update: ththeobjgkwppb[lgjvnhd].',
            replies: 200,
            retweets: 1000,
            likes: 500
        },

        {
            authorName: 'ghfjt',
            authorUsername: '@user456',
            img: PROFILE_IMG_PATH,
            content: 'Update: woepvmnbtqp. khhtsbngeb.',
            replies: 200,
            retweets: 1000,
            likes: 500
        },
    ]


    return tweets.map((tweet, index)=><Tweet {...tweet} key={index}/>)
}