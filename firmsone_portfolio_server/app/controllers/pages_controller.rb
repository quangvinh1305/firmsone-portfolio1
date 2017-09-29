class PagesController < ApplicationController
  def home
    @blogs = Blog.all

    render json: @blogs
  end

  def about
    @skills = Skill.all
    render json: @blogs
  end

  def contact
  end
end
