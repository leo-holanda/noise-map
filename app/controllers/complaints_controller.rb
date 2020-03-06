class ComplaintsController < ApplicationController

  def index
    @complaint = Complaint.new
    @all_complaints = Complaint.all

    respond_to do |format|
      format.html
      format.js
    end
  end

  def search
    @isComplaint = params[:isComplaint]

    @location = Location.new(location_params)

    if @location.valid?
      respond_to do |format|
        format.js
      end
    else
      respond_to do |format|
        format.js { render 'location_error' }
      end
    end
  end

  def create
    @complaint = Complaint.new(complaint_params)
    if @complaint.save
      @marker = @complaint
    else
      @error = @complaint.errors.full_messages
      p @error
      respond_to do |format|
        format.js { render 'complaint_error'}
      end
    end
  end

  private

  def complaint_params
    params.require(:complaint).permit(:latitude, :longitude, :description, :noise_type)
  end

  def location_params
    params.permit(:address)
  end
  
end
