import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    console.log('useUserStore initialized'); // Log when the store is initialized
    return {
      userId: localStorage.getItem('userUid') || null, // Initialize from localStorage
      username: localStorage.getItem('username') || null, // Initialize username from localStorage
      isAdmin: JSON.parse(localStorage.getItem('isAdmin') || 'false'), // Initialize isAdmin from localStorage
    };
  },
  actions: {
    setUserId(uid: string) {
      this.userId = uid;
      localStorage.setItem('userUid', uid); // Persist userId in localStorage
      console.log('userId set in local storage to', uid);
    },
    clearUserId() {
      this.userId = null;
      localStorage.removeItem('userUid'); // Remove userId from localStorage
      console.log('userid stored in localStorage:', this.userId);
    },
    setusername(username: string) {
      this.username = username;
      localStorage.setItem('username', username); // Persist username in localStorage
      console.log('username stored in localStorage:', username); 
    },
    clearusername() {
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