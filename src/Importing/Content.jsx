import dogfood from "../Assets/Dog Products/Dog Food/dog-food.webp";
import dogfood1 from "../Assets/Dog Products/Dog Food/dogfood_jinx.jpg";
import dogfood2 from "../Assets/Dog Products/Dog Food/dogfood_nomnom.jpg";
import dogfood3 from "../Assets/Dog Products/Dog Food/dogfood_ollie.jpg";
import dogfood4 from "../Assets/Dog Products/Dog Food/dogfood_purebalance.jpg";
import dogfood5 from "../Assets/Dog Products/Dog Food/dogfood_redbarn.jpg";
import dogfood6 from "../Assets/Dog Products/Dog Food/dogfood_farmer.jpg";
import dogtoys from "../Assets/Dog Products/Dog Toys/dog-toys.jpg";
import dogtoys1 from "../Assets/Dog Products/Dog Toys/dog-leash.jpg";
import dogtoys2 from "../Assets/Dog Products/Dog Toys/dog-collar.jpg";
import dogtoys3 from "../Assets/Dog Products/Dog Toys/dog-grooming-kit.jpg";
import dogtoys4 from "../Assets/Dog Products/Dog Toys/dog-potty.jpg";
import dogtoys5 from "../Assets/Dog Products/Dog Toys/dog-crate.jpg";
import dogtoys6 from "../Assets/Dog Products/Dog Toys/dog-toy.webp";

import dogtips from "../Assets/Blog Pages/dog-healthytips.jpeg";
import dogfunnymoments from "../Assets/Blog Pages/dog-withowner.webp";
import dogproductreview from "../Assets/Blog Pages/Dog-productreview.jpg";



const product_carouselContent = [
  {
    name: "Dog Food",
    productName: [
      "Jinx Dogfood",
      "Nomnom Dogfood",
      "Ollie Dogfood",
      "Pure Balance Dogfood",
      "Red Barn Dogfood",
      "Farmer Dogfood",
    ],
    description: "Kami menyediakan berbagai jenis makanan anjing yang berkualitas",
    productDescription: [
      "Makanan anjing premium dengan bahan alami dan bergizi untuk kesehatan optimal anjing Anda.",
      "Makanan anjing segar yang disesuaikan dengan kebutuhan nutrisi harian anjing Anda.",
      "Makanan anjing gourmet yang dirancang oleh ahli gizi hewan untuk kesehatan dan kebahagiaan anjing Anda.",
      "Makanan anjing dengan keseimbangan nutrisi yang sempurna untuk mendukung gaya hidup aktif anjing Anda.",
      "Makanan anjing dengan bahan-bahan berkualitas tinggi untuk mendukung sistem pencernaan dan kesehatan umum anjing Anda.",
      "Makanan anjing buatan rumah dengan bahan-bahan segar dari pertanian lokal untuk kualitas dan rasa yang tak tertandingi."
    ],
    image: dogfood,
    images: [dogfood1, dogfood2, dogfood3, dogfood4, dogfood5, dogfood6],
  },
  {
    name: "Dog Accessories, Toys, and Equipment",
    productName: [
      "Dog Leash",
      "Dog Collar",
      "Dog Grooming Kit",
      "Dog Potty",
      "Dog Cage",
      "Dog Toy",
    ],
    description: "Kami menjual asesoris, mainan dan peralatan untuk anjing anda",
    productDescription: [
      "Tali anjing yang kuat dan tahan lama, tersedia dalam berbagai ukuran dan desain untuk kenyamanan dan keamanan saat berjalan.",
      "Kalung anjing yang stylish dan fungsional, dilengkapi dengan berbagai fitur untuk kenyamanan dan identifikasi anjing Anda.",
      "Kit perawatan anjing lengkap yang berisi semua alat yang dibutuhkan untuk menjaga kebersihan dan kesehatan bulu anjing Anda.",
      "Alat toilet anjing yang praktis dan mudah dibersihkan, ideal untuk pelatihan kebersihan anjing di rumah.",
      "Kandang anjing yang aman dan nyaman, dirancang untuk memberikan tempat istirahat yang tenang bagi anjing Anda.",
      "Mainan anjing yang menarik dan tahan lama, dirancang untuk memberikan hiburan dan stimulasi mental bagi anjing Anda."
    ],
    image: dogtoys,
    images: [dogtoys1, dogtoys2, dogtoys3, dogtoys4, dogtoys5, dogtoys6],
  },

];


const blog_videos = [
  {
    title: "Healthy Dog Tips",
    description: "Berikut cuplikan menjaga kesehatan anjing",
    image: dogtips,
    video: "https://www.youtube.com/embed/FA4R9TBWOIU?si=ECGQ_KRqZKoxg1_D",
  },
  {
    title: "Funny Video",
    description: "Berikut cuplikan moment lucu anjing dan owner",
    image: dogfunnymoments,
    video: "https://www.youtube.com/embed/NGFKjWYKKvY?si=PwFPmhJibw24Ep6V",
  },
  {
    title: "Product Review",
    description: "Berikut cuplikan review produk anjing",
    image: dogproductreview,
    video: "https://www.youtube.com/embed/FGR3HL4WRVY?si=jTieKTtvMEIprxCp",
  },
];

export const content = {
  product_carouselContent,
  blog_videos,
};
