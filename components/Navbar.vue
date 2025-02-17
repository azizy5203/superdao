<script setup>
  import AppStore from "~/assets/img/icons/appstore.svg";
  import MenuIcon from "~/assets/img/icons/hamburger-menu.svg";
</script>

<template>
  <header class="header flex items-center h-[56px] md:h-[86px] lg:h-[104px]">
    <nav class="header__nav container flex items-center justify-between">
      <nuxt-link
        to="/"
        class="header__nav-brand">
        <img
          src="/img/logo.svg"
          alt="Superdao logo" />
      </nuxt-link>

      <menu
        class="header__nav-list hidden lg:flex items-center gap-10 font-montserrat text-white font-semibold text-sm xl:text-[20px]">
        <li class="px-2 py-4">
          <nuxt-link
            to="/#Product"
            class="hover:border-b border-orange"
            >Product</nuxt-link
          >
          <AppStore />
        </li>
        <li class="px-2 py-4">
          <nuxt-link
            to="/#Product"
            class="hover:border-b border-orange"
            >Use cases</nuxt-link
          >
        </li>
        <li class="px-2 py-4">
          <nuxt-link
            to="/#Product"
            class="hover:border-b border-orange"
            >Learn</nuxt-link
          >
        </li>
        <li class="px-2 py-4">
          <nuxt-link
            to="/#Product"
            class="hover:border-b border-orange"
            >About</nuxt-link
          >
        </li>
        <li class="px-2 py-4">
          <nuxt-link
            to="/#Product"
            class="hover:border-b border-orange"
            >Jobs</nuxt-link
          >
        </li>
      </menu>
      <nuxt-link
        to="/"
        class="header__nav-action hidden lg:block px-5 py-3 bg-zinc transition-all duration-150 hover:brightness-150 text-white rounded-lg"
        >Login</nuxt-link
      >
      <button class="block lg:hidden">
        <MenuIcon />
      </button>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
