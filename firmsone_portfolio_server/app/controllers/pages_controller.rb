class PagesController < ApplicationController
  def home
    @blogs = Blog.all

    render json: @blogs
  end

  def about
  end

  def contact
  end
end
