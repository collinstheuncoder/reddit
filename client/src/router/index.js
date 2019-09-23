import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(Router);

function metaTags(pageName) {
  return [
    {
      name: 'description',
      content: `The ${pageName} page of the Meetup App`,
    },
    {
      property: 'og:description',
      content: `The ${pageName} page of the Meetup App`,
    },
  ];
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Reddit | Home',
        metaTags: metaTags('home'),
      },
    },
    {
      path: '/account/signup',
      name: 'signup',
      component: () =>
        import(/* webpackChunkName: "signup" */ '../views/account/Signup.vue'),
      meta: {
        title: 'Reddit | Create Account',
        metaTags: metaTags('sign up'),
      },
    },
    {
      path: '/account/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ '../views/account/Login.vue'),
      meta: {
        title: 'Reddit | Login to Account',
        metaTags: metaTags('log in'),
      },
    },
    {
      path: '/account/profile',
      name: 'profile',
      component: () =>
        import(
          /* webpackChunkName: "profile" */ '../views/account/Profile.vue'
        ),
      meta: {
        title: 'Reddit | Profile',
        metaTags: metaTags('profile'),
      },
      children: [
        {
          path: '',
          name: 'profile-overview',
          component: () =>
            import(
              /* webpackChunkName: "profile-overview" */ '../components/profile/Overview.vue'
            ),
          meta: {
            title: 'Reddit | Profile Overview',
            metaTags: metaTags('profile overview'),
          },
        },
        {
          path: 'posts',
          name: 'profile-posts',
          component: () =>
            import(
              /* webpackChunkName: "profile-posts" */ '../components/profile/AllPosts.vue'
            ),
          meta: {
            title: 'Reddit | Profile Posts',
            metaTags: metaTags('profile posts'),
          },
        },
        {
          path: 'comments',
          name: 'profile-comments',
          component: () =>
            import(
              /* webpackChunkName: "profile-comments" */ '../components/profile/Comments.vue'
            ),
          meta: {
            title: 'Reddit | Profile Comments',
            metaTags: metaTags('profile comments'),
          },
        },
        {
          path: 'saved',
          name: 'profile-saved',
          component: () =>
            import(
              /* webpackChunkName: "profile-saved" */ '../components/profile/SavedPosts.vue'
            ),
          meta: {
            title: 'Reddit | Profile Saved Posts',
            metaTags: metaTags('profile saved posts'),
          },
        },
        {
          path: 'hidden',
          name: 'profile-hidden',
          component: () =>
            import(
              /* webpackChunkName: "profile-hidden" */ '../components/profile/HiddenPosts.vue'
            ),
          meta: {
            title: 'Reddit | Profile Hidden Posts',
            metaTags: metaTags('profile hidden posts'),
          },
        },
        {
          path: 'upvoted',
          name: 'profile-upvoted',
          component: () =>
            import(
              /* webpackChunkName: "profile-upvoted" */ '../components/profile/UpvotedPosts.vue'
            ),
          meta: {
            title: 'Reddit | Profile Upvoted Posts',
            metaTags: metaTags('profile upvoted posts'),
          },
        },
        {
          path: 'downvoted',
          name: 'profile-downvoted',
          component: () =>
            import(
              /* webpackChunkName: "profile-downvoted" */ '../components/profile/DownvotedPosts.vue'
            ),
          meta: {
            title: 'Reddit | Profile Downvoted Posts',
            metaTags: metaTags('profile downvoted posts'),
          },
        },
      ],
    },
    {
      path: '/subreddit/create',
      name: 'create-subreddit',
      component: () =>
        import(
          /* webpackChunkName: "create-subreddit" */ '../views/subreddit/CreateSubreddit.vue'
        ),
      meta: {
        title: 'Reddit | Create Subreddit',
        metaTags: [
          {
            name: 'description',
            content: 'The create subreddit page of Reddit.',
          },
          {
            property: 'og:description',
            content: 'The create subreddit page of Reddit.',
          },
        ],
      },
    },
    {
      path: '/subreddits',
      name: 'subreddit-list',
      component: () =>
        import(
          /* webpackChunkName: "subreddit-list" */ '../views/subreddit/SubredditList.vue'
        ),
      meta: {
        title: 'Reddit | Subreddit List Page',
        metaTags: [
          {
            name: 'description',
            content: 'The subreddit list page of Reddit.',
          },
          {
            property: 'og:description',
            content: 'The subreddit list page of Reddit.',
          },
        ],
      },
    },
    {
      path: '/r/:subredditName',
      name: 'subreddit-detail',
      component: () =>
        import(
          /* webpackChunkName: "subreddit-detail" */ '../views/subreddit/SubredditDetail.vue'
        ),
      meta: {
        title: 'Reddit | Subreddit Detail Page',
        metaTags: [
          {
            name: 'description',
            content: 'The subreddit detail page of Reddit.',
          },
          {
            property: 'og:description',
            content: 'The subreddit detail page of Reddit.',
          },
        ],
      },
    },
    {
      path: '/post/create',
      name: 'create-post',
      component: () =>
        import(
          /* webpackChunkName: "create-post" */ '../views/post/CreatePost.vue'
        ),
      meta: {
        title: 'Reddit | Create Post',
        metaTags: [
          {
            name: 'description',
            content: 'The create post page of Reddit.',
          },
          {
            property: 'og:description',
            content: 'The create post page of Reddit.',
          },
        ],
      },
    },
    {
      path: '/r/:subredditName/comments/:postTitle',
      name: 'post-detail',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "post-detail" */ '../views/post/PostDetail.vue'
        ),
      meta: {
        title: 'Reddit | Post Page',
        metaTags: [
          {
            name: 'description',
            content: 'The main post page of Reddit.',
          },
          {
            property: 'og:description',
            content: 'The main post page of Reddit.',
          },
        ],
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Change page title
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // eslint-disable-next-line
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
