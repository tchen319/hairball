Rails.application.routes.draw do
  get 'g/shopify/ews', to: 'welcome#index'
  get 'index.html', to: 'welcome#index'
  get 'welcome/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
