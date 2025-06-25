import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.html',
  styleUrls: ['./product-dashboard.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductDashboardComponent {

  searchText = '';
  selectedCategory = '';
  selectedVariant = '';
  selectedStatus = '';
  selectedVendor = '';
  selectedBrand = '';

  currentPage = 0;
  rowsPerPage = 5;
  toggleValue = false;


  products = [
    {
      name: 'Gift Card',
      icon: 'card_giftcard',
      iconClass: 'purple-icon',
      variant: 'Standalone',
      category: 'GiftCard',
      subCategory: '-',
      strain: '-',
      brand: 'PromoCo',
      vendor: 'VendorX',
      store: 'Store 1',
      status: 'Active'
    },
    {
      name: 'Pre-Roll OG',
      icon: 'local_florist',
      iconClass: 'green-icon',
      variant: 'Variant',
      category: 'Flower',
      subCategory: 'Pre-Roll',
      strain: 'OG Kush',
      brand: 'GreenGrow',
      vendor: 'VendorY',
      store: 'Store 2',
      status: 'Inactive'
    },
    {
      name: 'Gummy Bears',
      icon: 'restaurant',
      iconClass: 'orange-icon',
      variant: 'Standalone',
      category: 'Edibles',
      subCategory: 'Gummies',
      strain: '-',
      brand: 'SugarHigh',
      vendor: 'VendorZ',
      store: 'Store 1',
      status: 'Active'
    },
    {
      name: 'Vape Pen',
      icon: 'vape_free',
      iconClass: 'blue-icon',
      variant: 'Variant',
      category: 'Vape',
      subCategory: 'Disposable',
      strain: 'Skywalker',
      brand: 'Cloud9',
      vendor: 'VendorX',
      store: 'Store 3',
      status: 'Active'
    },
    {
      name: 'CBD Oil',
      icon: 'science',
      iconClass: 'teal-icon',
      variant: 'Standalone',
      category: 'Oil',
      subCategory: 'Concentrates',
      strain: 'Hybrid',
      brand: 'HealWell',
      vendor: 'VendorA',
      store: 'Store 4',
      status: 'Inactive'
    },
    {
      name: 'Chocolate Bar',
      icon: 'lunch_dining',
      iconClass: 'brown-icon',
      variant: 'Variant',
      category: 'Edibles',
      subCategory: 'Chocolate',
      strain: '-',
      brand: 'MellowBite',
      vendor: 'VendorC',
      store: 'Store 5',
      status: 'Active'
    },
    {
      name: 'Disposable Pen',
      icon: 'smoking_rooms',
      iconClass: 'gray-icon',
      variant: 'Standalone',
      category: 'Vape',
      subCategory: 'Disposable',
      strain: 'Indica',
      brand: 'VaporEase',
      vendor: 'VendorE',
      store: 'Store 6',
      status: 'Inactive'
    },
    {
      name: 'CBD Capsules',
      icon: 'medication',
      iconClass: 'cyan-icon',
      variant: 'Variant',
      category: 'Capsules',
      subCategory: '-',
      strain: 'Hybrid',
      brand: 'ZenLabs',
      vendor: 'VendorF',
      store: 'Store 2',
      status: 'Active'
    },
    {
      name: 'Sativa Flower',
      icon: 'eco',
      iconClass: 'green-icon',
      variant: 'Standalone',
      category: 'Flower',
      subCategory: 'Loose',
      strain: 'Sativa',
      brand: 'GreenLeaf',
      vendor: 'VendorD',
      store: 'Store 1',
      status: 'Active'
    },
    {
      name: 'Hybrid Cartridge',
      icon: 'blur_on',
      iconClass: 'pink-icon',
      variant: 'Variant',
      category: 'Vape',
      subCategory: 'Cartridge',
      strain: 'Hybrid',
      brand: 'PurePulls',
      vendor: 'VendorG',
      store: 'Store 3',
      status: 'Inactive'
    }
  ];

  get filteredProducts() {
    return this.products.filter(p =>
      (!this.searchText || p.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedCategory || p.category === this.selectedCategory) &&
      (!this.selectedVariant || p.variant === this.selectedVariant) &&
      (!this.selectedStatus || p.status === this.selectedStatus) &&
      (!this.selectedVendor || p.vendor === this.selectedVendor) &&
      (!this.selectedBrand || p.brand === this.selectedBrand)
    );
  }

  getStartIndex() {
    return this.currentPage * this.rowsPerPage;
  }

  getEndIndex() {
    const end = this.getStartIndex() + this.rowsPerPage;
    return end > this.filteredProducts.length ? this.filteredProducts.length : end;
  }

  onRowsChange() {
    this.currentPage = 0;
  }

  nextPage() {
    if (this.getEndIndex() < this.filteredProducts.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
