const firebaseConfig = {
    apiKey: "AIzaSyBIFGsFztv5P3za54jo9vr9etHh5e_yhVg",
    authDomain: "almajd-platform.firebaseapp.com",
    projectId: "almajd-platform",
    storageBucket: "almajd-platform.firebasestorage.app",
    messagingSenderId: "732881644079",
    appId: "1:732881644079:web:31ecc4445e6aa306d934da"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// يزيد عداد مشاهدات المقال بمقدار 1 بشكل ذري (بدون قراءة مسبقة، ينشئ المستند تلقائياً إن لم يكن موجوداً)
function recordArticleView(slug) {
    if(!slug) return;
    db.collection('articleViews').doc(slug).set(
        { count: firebase.firestore.FieldValue.increment(1) },
        { merge: true }
    ).catch(() => {});
}
