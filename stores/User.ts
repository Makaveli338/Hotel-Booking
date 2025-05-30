import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: localStorage.getItem('userUid') || null, // Initialize from localStorage
    username: localStorage.getItem('username') || null, // Initialize username from localStorage
    isAdmin: JSON.parse(localStorage.getItem('isAdmin') || 'false'), // Initialize isAdmin from localStorage
  }),
  actions: {
    setUserId(uid: string) {
      this.userId = uid;
      localStorage.setItem('userUid', uid); // Persist userId in localStorage
    },
    clearUserId() {
      this.userId = null;
      localStorage.removeItem('userUid'); // Remove userId from localStorage
    },
    setUsername(username: string) {
      this.username = username;
      localStorage.setItem('username', username); // Persist username in localStorage
    },
    clearUsername() {
      this.username = null;
      localStorage.removeItem('username'); // Remove username from localStorage
    },
    setAdminRole(isAdmin: boolean) {
      this.isAdmin = isAdmin;
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin)); // Persist admin role in localStorage
    },
    loadUserData() {
      // Load userId and username from localStorage
      this.userId = localStorage.getItem('userUid');
      this.username = localStorage.getItem('username');
      this.isAdmin = JSON.parse(localStorage.getItem('isAdmin') || 'false');  
    },
  },
});