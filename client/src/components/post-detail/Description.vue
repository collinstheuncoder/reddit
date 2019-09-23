<template>
  <div class="row description">
    <vote-action />
    <div class="col-11 col--main">
      <p class="post-added-by">
        Posted by
        <router-link to="/accounts/profile">u/incognito</router-link>12 hours
        ago.
      </p>
      <h2 class="post-title">Lazy take on Free Agency</h2>
      <p class="post-description">
        I keep hearing this take: if the Lakers strike out on top tier free
        agents, Kawhi, KD, Klay, maybe even Kemba- all the Ks, then they may
        have to settle on Khris Middleton. And that’s what NBA analysts just
        burp up and I get it, Middleton is a near max guy who’ll likely get it.
        The question is, why would he leave the Bucks to play with the Lakers?
        In the past that makes sense but I don’t think the logic holds up. I
        think a lot of stars would love to play with an unselfish superstar who
        isn’t passive aggressive and doesn’t dump his team. I assume stars want
        to play with coaches like Bud and not whoever Magic hires after they
        dump Walton. It’ll be funny if they hire Shaw. Just saying, it’s said
        with little thought, oh the Lakers May have to settle for Middleton.
        Fuck, why would he do that?
      </p>
      <user-actions :is-displayed="true" />
      <post-auth-status />
      <div class="post-editor">
        <p class="post-editor-user">
          Comment as
          <router-link to="/u/sleekcollins">sleekcollins</router-link>
        </p>
        <comment-form />
      </div>
      <sort-comments />
      <hr />
    </div>
  </div>
</template>

<script>
import PostAuthStatus from './PostAuthStatus';
import SortComments from './SortComments';
import CommentForm from '../forms/Comment';
import VoteAction from '../shared/VoteAction';
import UserActions from '../shared/UserActions';

export default {
  name: 'post-description',
  components: {
    UserActions,
    PostAuthStatus,
    SortComments,
    CommentForm,
    VoteAction,
  },
};
</script>

<style lang="scss" scoped>
.post {
  &-added-by {
    color: #a0a0a0;
    font-size: 0.85rem;
  }

  &-title {
    font-size: 1.25rem;
    margin: 0.5rem 0 1rem;
  }

  &-description {
    text-align: justify;
    font-size: 0.95rem;
  }

  &-editor {
    margin-top: 1rem;

    &-user {
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
    }
  }

  &-sort {
    margin-top: 1rem;
  }
}

.col {
  &--votes {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    align-items: center;
    padding: 0;
    max-width: 3.333333%;
  }
}

.vote {
  cursor: pointer;
}
</style>
