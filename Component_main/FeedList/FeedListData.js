import ProfileImgWework from './FeedImages/weworkprofile.jpg';
import ArticleMainImg from './FeedImages/feedmainImage.jpg';
import ProfileImgWecode from './FeedImages/wecodeprofile.jpg';
import CodingImg from './FeedImages/codingImg.jpg';

const articleData = [

    {
        id: 1,
        writerUserName: 'wework',
        writerUserProfile: ProfileImgWework,
        articleImg: ArticleMainImg,
        articleContent: 'ReactNaive is so hard!!!!!!!!!',
        likes: 10,
        comments: [
            {
                username: 'jsi7037',
                articleContent: 'yes',
                id: 1,
            },
            {
                username: 'leemutnam2288',
                articleContent: 'ㅇㅇ',
                id: 2,
            },
            {
                username: 'jhj3434',
                articleContent: 'me too',
                id: 3,
            },
        ]
    },
    {
        id: 2,
        writerUserName: 'wecode',
        writerUserProfile: ProfileImgWecode,
        articleImg: CodingImg,
        articleContent: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        likes: 30,
        comments: [
            {
                username: 'awef34534',
                articleContent: '코딩 잼써',
                id: 1,
            },
            {
                username: 'leemutasdf____288',
                articleContent: '코딩 어려워',
                id: 2,
            },
        ]
    },
]

const logOnUserData = [
    {
        logOnUserName: 'wework',
        logOnUserProfile: ProfileImgWework,
    }
]
export { articleData, logOnUserData };