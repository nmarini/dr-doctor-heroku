Rails.application.routes.draw do

  namespace :api do 
    namespace :v1 do 
      resources :diagnoses, :only => [:show, :create, :update, :destroy]
      resources :users, :only => [:show, :create, :update, :destroy]
    end 
  end 
  
end
